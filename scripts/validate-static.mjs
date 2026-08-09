import { access, readFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const targetRoot = path.resolve(projectRoot, process.argv[2] || "dist");
const routes = JSON.parse(await readFile(path.join(projectRoot, "content", "routes.json"), "utf8"));
const errors = [];
const stylesheetRefs = new Set();

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(absolute)));
    else if (entry.name.endsWith(".html")) files.push(absolute);
  }
  return files;
}

function count(text, pattern) {
  return [...text.matchAll(pattern)].length;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function localTarget(href) {
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  const [pathname, fragment] = decodeURIComponent(href).split("#", 2);
  let file;
  if (!pathname || pathname === "/") file = path.join(targetRoot, "index.html");
  else if (pathname.endsWith("/")) file = path.join(targetRoot, pathname, "index.html");
  else file = path.join(targetRoot, pathname);
  return { file, fragment };
}

function expectedRobots(policy) {
  return policy === "index"
    ? "index, follow, max-image-preview:large, max-snippet:-1"
    : "noindex, follow";
}

for (const route of routes) {
  const file = path.join(targetRoot, route.outputPath);
  let html;
  try {
    html = await readFile(file, "utf8");
  } catch {
    errors.push(`${route.id}: missing generated output dist/${route.outputPath}`);
    continue;
  }

  const expectedPath = route.paths[0];
  if (!/^<!doctype html>/i.test(html.trimStart())) errors.push(`${route.id}: missing HTML doctype`);
  if (!html.includes(`data-route-id="${route.id}"`)) errors.push(`${route.id}: missing route identity`);
  if (!html.includes(`<title>${route.title.replaceAll("&", "&amp;")}</title>`) && !html.includes(`<title>${route.title}</title>`)) errors.push(`${route.id}: title does not match registry`);
  if (!html.includes(`rel="canonical" href="${route.canonical}"`)) errors.push(`${route.id}: canonical does not match registry`);
  if (!html.includes(`name="robots" content="${expectedRobots(route.indexingPolicy)}"`)) errors.push(`${route.id}: robots policy does not match registry`);
  if (!/<meta\s+name=["']viewport["']/i.test(html)) errors.push(`${route.id}: missing viewport meta`);

  for (const tag of ["html", "head", "body", "main", "header", "footer"]) {
    if (count(html, new RegExp(`<${tag}(?:\\s|>)`, "gi")) !== 1 || count(html, new RegExp(`</${tag}>`, "gi")) !== 1) {
      errors.push(`${route.id}: expected exactly one ${tag} element`);
    }
  }
  if (count(html, /<h1(?:\s|>)/gi) !== 1) errors.push(`${route.id}: expected exactly one H1`);
  if (/<style(?:\s|>)/i.test(html)) errors.push(`${route.id}: page-local style block is forbidden`);
  if (/\sstyle=["']/i.test(html)) errors.push(`${route.id}: inline style attribute is forbidden`);
  if (/site\.css\?v=/i.test(html)) errors.push(`${route.id}: manual CSS cache version remains`);

  const css = [...html.matchAll(/<link\s+rel=["']stylesheet["'][^>]*href=["']([^"']+\.css)["']/gi)].map((match) => match[1]);
  if (css.length !== 1) errors.push(`${route.id}: expected exactly one generated stylesheet, found ${css.length}`);
  css.forEach((href) => stylesheetRefs.add(href));

  if (route.id === "home") {
    if (!/<a\b[^>]*class=["'][^"']*site-brand[^"']*["'][^>]*aria-current=["']page["']/i.test(html)) errors.push("home: brand is not marked current");
    const blocks = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    if (!blocks.length) errors.push("home: missing JSON-LD");
    for (const block of blocks) {
      try {
        const data = JSON.parse(block[1]);
        if (data["@type"] === "Person") {
          if (!data.sameAs?.includes("https://orcid.org/0000-0002-6434-1408")) errors.push("home: Person JSON-LD lost the required ORCID");
          if (!data.sameAs?.includes("https://github.com/drdattaaiims")) errors.push("home: Person JSON-LD lost GitHub");
          if (!data.sameAs?.includes("https://www.linkedin.com/in/suvrankardatta/")) errors.push("home: Person JSON-LD lost LinkedIn");
          if (!data.sameAs?.includes("https://www.researchgate.net/profile/Suvrankar-Datta")) errors.push("home: Person JSON-LD lost ResearchGate");
        }
      } catch {
        errors.push("home: malformed JSON-LD");
      }
    }
  }

  const activeKey = route.navKey ?? route.parentNavKey;
  if (activeKey && activeKey !== "home") {
    const navHref = {
      work: "/research.html",
      clinical: "/clinical-global-health.html",
      publications: "/publications.html",
      talks: "/talks.html",
      awards: "/awards.html",
      journey: "/journey.html",
      cv: "/cv/",
    }[activeKey];
    const current = route.navKey ? "page" : "location";
    if (navHref && !new RegExp(`<a\\b[^>]*href=["']${escapeRegex(navHref)}["'][^>]*aria-current=["']${current}["']`, "i").test(html)) {
      errors.push(`${route.id}: missing ${current} active state for ${activeKey}`);
    }
  }

  if (route.redirectTo) {
    if (!html.includes(`http-equiv="refresh" content="0; url=${route.redirectTo}"`)) errors.push(`${route.id}: missing meta redirect`);
    if (!html.includes(`href="${route.redirectTo}"`)) errors.push(`${route.id}: missing visible redirect fallback`);
  }

  const ids = [...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) errors.push(`${route.id}: duplicate ids: ${[...new Set(duplicates)].join(", ")}`);

  const targetBlankAnchors = [...html.matchAll(/<a\b[^>]*target=["']_blank["'][^>]*>/gi)].map((match) => match[0]);
  for (const anchor of targetBlankAnchors) {
    if (!/rel=["'][^"']*noopener/i.test(anchor)) errors.push(`${route.id}: _blank link missing noopener`);
  }

  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
  for (const image of images) {
    if (!/\salt=["'][^"']*["']/i.test(image)) errors.push(`${route.id}: image missing alt attribute`);
  }

  if (expectedPath === "/#contact" && !html.includes('id="contact"')) errors.push("home: missing contact fragment");
}

if (stylesheetRefs.size !== 1) errors.push(`Generated pages do not share one stylesheet: ${[...stylesheetRefs].join(", ")}`);

for (const file of await walk(targetRoot)) {
  const relative = path.relative(targetRoot, file);
  const html = await readFile(file, "utf8");
  if (/^google[^/]*\.html$/i.test(relative) && html.startsWith("google-site-verification:")) continue;
  const hrefs = [...html.matchAll(/<a\b[^>]*\shref=["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const href of hrefs) {
    const target = localTarget(href);
    if (!target) continue;
    try {
      await access(target.file, constants.F_OK);
      if (target.fragment) {
        const targetHtml = await readFile(target.file, "utf8");
        if (!new RegExp(`\\sid=["']${escapeRegex(target.fragment)}["']`, "i").test(targetHtml)) {
          errors.push(`${relative}: fragment target does not exist: ${href}`);
        }
      }
    } catch {
      errors.push(`${relative}: broken internal link ${href}`);
    }
  }
}

const sitemap = await readFile(path.join(targetRoot, "sitemap.xml"), "utf8");
for (const route of routes) {
  const present = sitemap.includes(`<loc>${route.canonical}</loc>`);
  const expected = route.indexingPolicy === "index" && Boolean(route.priority);
  const canonicalOwnedByIndexRoute = routes.some((candidate) => candidate.id !== route.id && candidate.canonical === route.canonical && candidate.indexingPolicy === "index");
  if (!canonicalOwnedByIndexRoute && present !== expected) errors.push(`${route.id}: sitemap inclusion does not match indexing policy`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${routes.length} generated routes, metadata, navigation, JSON-LD, links, fragments, and sitemap.`);
}

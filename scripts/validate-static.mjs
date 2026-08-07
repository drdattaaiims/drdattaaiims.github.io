import { access, readFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const targetRoot = path.resolve(projectRoot, process.argv[2] || "dist");
const errors = [];

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

function localTarget(href) {
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  const pathname = decodeURIComponent(href.split(/[?#]/, 1)[0]);
  if (pathname === "/") return path.join(targetRoot, "index.html");
  if (pathname.endsWith("/")) return path.join(targetRoot, pathname, "index.html");
  return path.join(targetRoot, pathname);
}

for (const file of await walk(targetRoot)) {
  const relative = path.relative(targetRoot, file);
  const html = await readFile(file, "utf8");

  // Google's ownership-verification token intentionally uses an .html
  // extension without being an HTML document.
  if (/^google[^/]*\.html$/i.test(relative) && html.startsWith("google-site-verification:")) continue;

  if (!/^<!doctype html>/i.test(html.trimStart())) errors.push(`${relative}: missing HTML doctype`);
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${relative}: missing non-empty title`);
  if (!/<meta\s+name=["']viewport["']/i.test(html)) errors.push(`${relative}: missing viewport meta`);

  for (const tag of ["html", "head", "body"]) {
    if (count(html, new RegExp(`<${tag}(?:\\s|>)`, "gi")) !== 1 || count(html, new RegExp(`</${tag}>`, "gi")) !== 1) {
      errors.push(`${relative}: malformed ${tag} structure`);
    }
  }

  const ids = [...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) errors.push(`${relative}: duplicate ids: ${[...new Set(duplicates)].join(", ")}`);

  const hrefs = [...html.matchAll(/<a\b[^>]*\shref=["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const href of hrefs) {
    const target = localTarget(href);
    if (!target) continue;
    try {
      await access(target, constants.F_OK);
    } catch {
      errors.push(`${relative}: broken internal link ${href}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated generated HTML and internal links in ${path.relative(projectRoot, targetRoot)}`);
}

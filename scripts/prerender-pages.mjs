import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(projectRoot, "dist");
const ssrRoot = path.join(projectRoot, ".prerender");
const routes = JSON.parse(await readFile(path.join(projectRoot, "content", "routes.json"), "utf8"));
const manifest = JSON.parse(await readFile(path.join(distRoot, ".vite", "manifest.json"), "utf8"));
const clientEntry = manifest["index.html"];

if (!clientEntry?.file) throw new Error("Vite manifest does not contain the index.html client entry");

const ssrModule = await import(pathToFileURL(path.join(ssrRoot, "entry-server.js")).href);
if (typeof ssrModule.render !== "function") throw new Error("SSR bundle does not export render(pathname)");

function escapeAttribute(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function jsonLdScripts(route) {
  return (route.jsonLd ?? []).map((value) => {
    const json = JSON.stringify(value).replaceAll("<", "\\u003c");
    return `<script type="application/ld+json">${json}</script>`;
  }).join("\n");
}

function robotsFor(policy) {
  if (policy === "index") return "index, follow, max-image-preview:large, max-snippet:-1";
  return "noindex, follow";
}

function assetTags() {
  const css = (clientEntry.css ?? []).map((href) => `<link rel="stylesheet" href="/${escapeAttribute(href)}">`).join("\n");
  return `${css}\n<script type="module" src="/${escapeAttribute(clientEntry.file)}"></script>`;
}

function documentFor(route, appHtml) {
  const og = route.openGraph ?? {};
  const twitter = route.twitter ?? {};
  const redirect = route.redirectTo
    ? `<meta http-equiv="refresh" content="0; url=${escapeAttribute(route.redirectTo)}">`
    : "";
  const verification = route.id === "home"
    ? '<meta name="google-site-verification" content="RuKnmXZPtpWwYaGyhNV6Q5hSAGyAMPR4qwMEZSFUOAM">'
    : "";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeAttribute(route.title)}</title>
  <meta name="description" content="${escapeAttribute(route.description)}">
  <meta name="robots" content="${robotsFor(route.indexingPolicy)}">
  <meta name="theme-color" content="#081D3A">
  ${verification}
  ${redirect}
  <link rel="canonical" href="${escapeAttribute(route.canonical)}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <meta property="og:title" content="${escapeAttribute(og.title ?? route.title)}">
  <meta property="og:description" content="${escapeAttribute(og.description ?? route.description)}">
  <meta property="og:type" content="${escapeAttribute(og.type ?? "website")}">
  <meta property="og:url" content="${escapeAttribute(route.canonical)}">
  <meta property="og:image" content="${escapeAttribute(og.image ?? "https://drdattaaiims.github.io/og.png")}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="${escapeAttribute(twitter.card ?? "summary_large_image")}">
  <meta name="twitter:title" content="${escapeAttribute(twitter.title ?? route.title)}">
  <meta name="twitter:description" content="${escapeAttribute(twitter.description ?? route.description)}">
  <meta name="twitter:image" content="${escapeAttribute(twitter.image ?? og.image ?? "https://drdattaaiims.github.io/og.png")}">
  ${jsonLdScripts(route)}
  ${assetTags()}
</head>
<body data-route-id="${escapeAttribute(route.id)}">
  <div id="root">${appHtml}</div>
</body>
</html>
`;
}

for (const route of routes) {
  const pathname = route.paths[0];
  const rendered = ssrModule.render(pathname);
  if (rendered.routeId !== route.id) {
    throw new Error(`SSR route mismatch for ${pathname}: expected ${route.id}, rendered ${rendered.routeId}`);
  }
  const outputPath = path.join(distRoot, route.outputPath);
  if (route.outputPath !== "index.html") {
    try {
      await readFile(outputPath, "utf8");
      throw new Error(`Refusing to overwrite unexpected existing output: dist/${route.outputPath}`);
    } catch (error) {
      if (error?.code !== "ENOENT") throw error;
    }
  }
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, documentFor(route, rendered.html), "utf8");
}

const sitemapRoutes = routes.filter((route) => route.indexingPolicy === "index" && route.priority);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes.map((route) => `  <url><loc>${route.canonical}</loc><lastmod>${route.lastmod}</lastmod><priority>${route.priority.toFixed(1)}</priority></url>`).join("\n")}
</urlset>
`;
await writeFile(path.join(distRoot, "sitemap.xml"), sitemap, "utf8");
await rm(ssrRoot, { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes and generated sitemap.xml.`);

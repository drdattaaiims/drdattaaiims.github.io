import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicRoot = path.join(projectRoot, "public");
const routes = JSON.parse(await readFile(path.join(projectRoot, "content", "routes.json"), "utf8"));
const collisions = [];

for (const route of routes) {
  if (route.outputPath === "index.html") continue;
  const publicTarget = path.join(publicRoot, route.outputPath);
  try {
    await access(publicTarget, constants.F_OK);
    collisions.push(`${route.id}: public/${route.outputPath}`);
  } catch {
    // Expected: generated routes must not have a public/ source twin.
  }
}

const sitemapSource = path.join(publicRoot, "sitemap.xml");
try {
  await access(sitemapSource, constants.F_OK);
  collisions.push("sitemap: public/sitemap.xml");
} catch {
  // Expected once the registry owns sitemap generation.
}

if (collisions.length) {
  console.error("Generated-output collisions detected. Delete each source in the same commit as its route migration:\n" + collisions.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`No route collisions across ${routes.length} generated outputs.`);
}

import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const forbiddenFiles = ["public/site.css", "public/index.css", "scripts/prerender.mjs"];

for (const relative of forbiddenFiles) {
  try {
    await access(path.join(projectRoot, relative), constants.F_OK);
    errors.push(`${relative}: obsolete parallel style/prerender source remains`);
  } catch {
    // Expected.
  }
}

const sourceFiles = [
  "index.css",
  "components/site/SiteHeader.tsx",
  "components/site/SiteFooter.tsx",
  "components/site/SiteShell.tsx",
  "components/pages/ContentPage.tsx",
];
for (const relative of sourceFiles) {
  const text = await readFile(path.join(projectRoot, relative), "utf8");
  if (/site\.css\?v=/i.test(text)) errors.push(`${relative}: manual CSS cache version remains`);
  if (/navToggle\.addEventListener/.test(text)) errors.push(`${relative}: duplicated static menu script remains`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Validated the single style, shell, and prerender source of truth.");
}

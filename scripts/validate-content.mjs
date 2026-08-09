import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const targetRoot = path.resolve(projectRoot, process.argv[2] || "dist");
const contract = JSON.parse(await readFile(path.join(projectRoot, "content", "content-contract.json"), "utf8"));
const errors = [];

for (const item of contract) {
  const content = JSON.parse(await readFile(path.join(projectRoot, "content", "pages", `${item.id}.json`), "utf8"));
  const contentHtml = [content.pageHeadHtml, content.pageBodyHtml].filter(Boolean).join("\n");
  const hash = createHash("sha256").update(contentHtml).digest("hex");
  if (hash !== item.contentHash) errors.push(`${item.id}: captured content changed without contract approval`);
  const generated = await readFile(path.join(targetRoot, item.outputPath), "utf8");
  if (content.pageHeadHtml && !generated.includes(content.pageHeadHtml)) errors.push(`${item.id}: generated page lost page-head content`);
  if (content.pageBodyHtml && !generated.includes(content.pageBodyHtml)) errors.push(`${item.id}: generated page lost page-body content`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Verified strict content parity for ${contract.length} migrated pages.`);
}

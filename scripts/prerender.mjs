import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(projectRoot, "dist", "index.html");
const emptyRoot = '<div id="root"></div>';

const staticHomepage = `
<div id="root">
  <div class="min-h-screen pt-14" data-prerendered-homepage>
    <header class="fixed top-0 left-0 right-0 z-50 bg-canvas/95 border-b border-rule">
      <div class="mx-auto max-w-[1120px] px-6">
        <div class="flex items-center justify-between h-14">
          <a href="/" class="font-display font-bold text-navy no-underline">Suvrankar Datta</a>
          <nav class="hidden items-center gap-4 font-sans text-xs min-[900px]:flex" aria-label="Primary">
            <a href="/research.html">Work</a><a href="/clinical-global-health.html">Clinical &amp; Global Health</a><a href="/publications.html">Publications</a><a href="/talks.html">Talks</a><a href="/awards.html">Awards</a><a href="/journey.html">Journey</a><a href="/cv/">CV</a><a href="/#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
    <main>
      <section class="border-b border-rule px-6 pb-8 pt-8 min-[900px]:pb-14 min-[900px]:pt-16">
        <div class="mx-auto max-w-[1120px]">
          <p class="font-sans text-xs uppercase tracking-[0.12em] text-ink-faint">Physician-scientist &middot; Clinical AI evaluation &middot; Global health</p>
          <h1 class="mt-1 font-display text-4xl font-bold leading-tight tracking-tight text-navy min-[900px]:text-5xl">Suvrankar Datta</h1>
          <p class="mt-2 font-sans text-sm text-ink-quiet">Founder and Group Lead, CRASH Lab &middot; Simons Ashoka Early Career Fellow</p>
          <p class="mt-5 max-w-prose font-serif text-lg font-semibold text-navy">Clinical AI should know when to answer—and when to hand over.</p>
          <p class="mt-3 max-w-prose leading-relaxed">I am a radiologist and physician-scientist studying when clinical AI can be trusted, when it should defer and whether it works across Indian health systems. My work spans radiology benchmarks, multilingual tools, decision support and LMIC validation.</p>
          <p class="mt-4 font-sans text-sm"><a href="mailto:suvrankar.datta@ashoka.edu.in">Email</a> &middot; <a href="https://www.linkedin.com/in/suvrankardatta/">LinkedIn</a> &middot; <a href="https://scholar.google.com/citations?user=lL8-zOoAAAAJ&amp;hl=en">Google Scholar</a> &middot; <a href="https://crashlab.in/">CRASH Lab</a></p>
        </div>
      </section>
      <section class="border-b border-rule bg-elevated px-6 py-10 min-[900px]:py-14">
        <div class="mx-auto max-w-[1120px]"><h2 class="font-display text-2xl font-semibold text-navy">Selected Work</h2><ul><li>Radiology's Last Exam — co-first author, RadLE 1.0; co-lead, RadLE 2.0.</li><li>PrAImaan — clinical research and technical teams supervision under PI Prof. Anurag Agrawal.</li><li>V2DD — clinical evaluation team supervision under PI Prof. Anurag Agrawal.</li><li>Equitable radiology foundation models — Principal Investigator.</li><li>PREDICT-AI — Principal Investigator.</li></ul><a href="/research.html">Explore the work &rarr;</a></div>
      </section>
      <section class="border-b border-rule px-6 py-10 min-[900px]:py-14"><div class="mx-auto max-w-[1120px]"><h2 class="font-display text-2xl font-semibold text-navy">Clinical &amp; Global Health</h2><p class="max-w-prose leading-relaxed">Public-sector and rural clinical practice shape how I evaluate medical AI across languages, populations, sites and constrained workflows.</p><a href="/clinical-global-health.html">Clinical grounding and health-system work &rarr;</a></div></section>
      <section class="border-b border-rule bg-elevated px-6 py-10 min-[900px]:py-14"><div class="mx-auto max-w-[1120px]"><h2 class="font-display text-2xl font-semibold text-navy">What we evaluate for AI systems</h2><p class="max-w-prose leading-relaxed">Capability, reliability, safety, deployment fit and impact—from retrospective, leaderboard-based evaluation to workflow testing and prospective validation.</p></div></section>
      <section class="border-b border-rule px-6 py-10 min-[900px]:py-14"><div class="mx-auto max-w-[1120px]"><h2 class="font-display text-2xl font-semibold text-navy">Selected Publications</h2><ul><li>MedVersa — <em>NEJM AI</em>, 2026.</li><li>Radiology's Last Exam — RadLE 1.0 preprint, 2025.</li><li>Fine-Grained Rib Fracture Diagnosis — MICCAI, 2025.</li></ul><a href="/publications.html">Full publication list &rarr;</a></div></section>
      <section class="border-b border-rule bg-elevated px-6 py-10 min-[900px]:py-14"><div class="mx-auto max-w-[1120px]"><h2 class="font-display text-2xl font-semibold text-navy">Background</h2><ul><li>Simons Ashoka Early Career Fellow.</li><li>Founder and Group Lead, CRASH Lab.</li><li>Former Senior Resident, AIIMS New Delhi.</li><li>MD, AIIMS New Delhi; MBBS, JIPMER.</li></ul><a href="/journey.html">Full experience and education &rarr;</a></div></section>
      <section id="contact" class="border-b border-rule px-6 py-10 min-[900px]:py-14"><div class="mx-auto max-w-[1120px]"><h2 class="font-display text-2xl font-semibold text-navy">Contact</h2><p><a href="mailto:suvrankar.datta@ashoka.edu.in">suvrankar.datta@ashoka.edu.in</a></p></div></section>
    </main>
  </div>
</div>`;

const html = await readFile(outputPath, "utf8");

if (!html.includes(emptyRoot)) {
  throw new Error(`Could not find the empty application root in ${outputPath}`);
}

await writeFile(outputPath, html.replace(emptyRoot, staticHomepage), "utf8");
console.log("Prerendered static homepage content into dist/index.html");

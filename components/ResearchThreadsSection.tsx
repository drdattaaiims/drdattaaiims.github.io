import SectionHeading from "@/components/SectionHeading";

const threads = [
  {
    title: "Fine-grained diagnosis under label scarcity.",
    body: "AIRib, an end-to-end pipeline for detecting and prognosticating traumatic rib fractures from CT with substantially less labelled data than standard training requires, using hyperbolic embeddings to encode the fracture hierarchy.",
    evidence: "MICCAI 2025; RSNA Trainee Research Prize 2023",
  },
  {
    title: "Evaluating frontier AI against clinicians, and where it fails.",
    body: "Radiology's Last Exam (RadLE) benchmarks frontier multimodal models against board-certified radiologists on diagnostic accuracy, calibrated confidence, and readiness for autonomous use — plus where LLM-augmented reporting pipelines break under distribution shift.",
    evidence: "RadLE 1.0, arXiv 2025; RSNA 2023 (2 Cutting-Edge Orals); IJRI 2026",
  },
  {
    title: "Multimodal foundation models for medical image interpretation.",
    body: "Generalist foundation models that interpret medical images across modalities, developed with the Rajpurkar Lab at Harvard.",
    evidence: "MedVersa, NEJM AI 2026",
  },
];

export default function ResearchThreadsSection() {
  return (
    <section id="research" className="py-14 px-6 border-b border-rule">
      <div className="max-w-4xl mx-auto space-y-7">
        <SectionHeading>Research</SectionHeading>

        <div className="space-y-7">
          {threads.map((thread, i) => (
            <div key={thread.title} className="max-w-prose">
              <span className="font-mono text-xs text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="leading-relaxed mt-1">
                <strong className="font-display font-semibold text-navy">{thread.title}</strong>{" "}
                {thread.body}
              </p>
              <p className="font-sans text-sm text-ink-quiet mt-1.5">
                → {thread.evidence}
              </p>
            </div>
          ))}
        </div>

        <a
          href="/research.html"
          className="inline-block font-sans text-sm font-medium text-navy no-underline hover:underline underline-offset-4"
          data-testid="link-research-full"
        >
          Full research page →
        </a>
      </div>
    </section>
  );
}

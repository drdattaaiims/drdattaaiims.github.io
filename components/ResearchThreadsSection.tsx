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
    <section id="research" className="py-12 px-6 border-b border-rule">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-serif font-semibold">Research</h2>

        <div className="space-y-6">
          {threads.map((thread) => (
            <div key={thread.title} className="max-w-prose">
              <p className="leading-relaxed">
                <strong>{thread.title}</strong> {thread.body}
              </p>
              <p className="font-sans text-sm text-ink-quiet mt-1">
                → {thread.evidence}
              </p>
            </div>
          ))}
        </div>

        <a
          href="/research.html"
          className="font-sans text-sm text-primary hover:underline"
          data-testid="link-research-full"
        >
          Full research page →
        </a>
      </div>
    </section>
  );
}

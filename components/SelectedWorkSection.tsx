import Section from "@/components/Section";

const programmes = [
  {
    title: "Radiology's Last Exam (RadLE)",
    role: "Co-first author and benchmark co-lead",
    body: "An uncertainty-aware evaluation of frontier multimodal AI against radiologists. RadLE 2.0 evaluates 16 systems across 200 expert-level cases using complementary measures of accuracy, reliability, safety, confidence and handover readiness.",
    href: "https://arxiv.org/abs/2509.25559",
    linkLabel: "arXiv",
  },
  {
    title: "PrAImaan",
    role: "Clinical Research and Technical Teams Supervisor, under PI Prof. Anurag Agrawal",
    body: "A Gates Foundation-supported programme for blinded, reproducible and locally relevant evaluation of health AI systems in India.",
    href: "https://kcdha.ashoka.edu.in/2025-researchdetails/evaluating-healthcare-ai-scribe-models-in-india-praimaan",
    linkLabel: "Project page",
  },
  {
    title: "V2DD",
    role: "Clinical Evaluation Team Supervisor, under PI Prof. Anurag Agrawal",
    body: "Evaluation of multilingual AI scribes and voice-to-structured-data systems across transcription fidelity, critical omissions, hallucinations, clinician correction burden, privacy, usability and interoperability.",
    href: "https://www.gatesfoundation.org/about/committed-grants/2025/11/inv-085290",
    linkLabel: "Grant record",
  },
  {
    title: "Equitable radiology foundation models",
    role: "Principal Investigator",
    body: "A three-year DST–A*STAR India–Singapore programme developing indigenous radiology datasets, subgroup evaluations and culturally congruent vision-language models for South Asian populations.",
    href: "https://kcdha.ashoka.edu.in/news-details/kcdh-a-is-awarded-the",
    linkLabel: "Announcement",
  },
  {
    title: "PREDICT-AI",
    role: "Principal Investigator",
    body: "An IndiaAI CATCH-supported consortium with Tata Memorial Hospital and Manentia AI developing decision support for post-chemotherapy RP-LND planning in patients with testicular cancer.",
    href: "https://kcdha.ashoka.edu.in/news-details/dr-suvrankar-datta-awarded-the-prestigious",
    linkLabel: "Announcement",
  },
];

export default function SelectedWorkSection() {
  return (
    <Section id="selected-work" heading="Selected Work" tone="sunk">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {programmes.map((p) => (
          <div key={p.title}>
            <p className="font-display font-semibold text-navy">{p.title}</p>
            <p className="font-sans text-sm text-ink-quiet">{p.role}</p>
            <p className="leading-relaxed mt-1.5">{p.body}</p>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-navy no-underline hover:underline underline-offset-4 mt-1.5 inline-block"
              data-testid={`link-work-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              {p.linkLabel} &rarr;
            </a>
          </div>
        ))}
      </div>

      <p className="font-sans text-sm text-ink-quiet mt-8">
        Additional selected work &mdash; AIRib, MICCAI 2025, MedVersa, and
        LLM-augmented reporting studies &mdash; is on the{" "}
        <a href="/research.html" className="text-navy hover:underline underline-offset-4">
          Research page
        </a>
        .
      </p>
    </Section>
  );
}

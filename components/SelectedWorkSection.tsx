import Section from "@/components/Section";

const programmes = [
  {
    title: "Radiology's Last Exam (RadLE)",
    role: "Co-first author and benchmark co-lead",
    body: "An uncertainty-aware evaluation of frontier multimodal AI against radiologists. RadLE 2.0 evaluates 16 systems across 200 expert-level cases using complementary measures of accuracy, reliability, safety, confidence and handover readiness.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2509.25559" },
    ],
  },
  {
    title: "PrAImaan",
    role: "Clinical Research and Technical Teams Supervisor, under PI Prof. Anurag Agrawal",
    body: "A Gates Foundation-supported programme for blinded, reproducible and locally relevant evaluation of health AI systems in India.",
    links: [
      {
        label: "Project page",
        href: "https://kcdha.ashoka.edu.in/2025-researchdetails/evaluating-healthcare-ai-scribe-models-in-india-praimaan",
      },
    ],
  },
  {
    title: "V2DD",
    role: "Clinical Evaluation Team Supervisor, under PI Prof. Anurag Agrawal",
    body: "Evaluation of multilingual AI scribes and voice-to-structured-data systems across transcription fidelity, critical omissions, hallucinations, clinician correction burden, privacy, usability and interoperability.",
    links: [
      {
        label: "Grant record",
        href: "https://www.gatesfoundation.org/about/committed-grants/2025/11/inv-085290",
      },
    ],
  },
  {
    title: "Equitable radiology foundation models",
    role: "Principal Investigator",
    body: "A three-year DST–A*STAR India–Singapore programme developing indigenous radiology datasets, subgroup evaluations and culturally congruent vision-language models for South Asian populations.",
    links: [
      {
        label: "Announcement",
        href: "https://kcdha.ashoka.edu.in/news-details/kcdh-a-is-awarded-the",
      },
    ],
  },
  {
    title: "PREDICT-AI",
    role: "Principal Investigator",
    body: "An IndiaAI CATCH-supported consortium with Tata Memorial Hospital and Manentia AI developing decision support for post-chemotherapy RP-LND planning in patients with testicular cancer.",
    links: [
      {
        label: "Announcement",
        href: "https://kcdha.ashoka.edu.in/news-details/dr-suvrankar-datta-awarded-the-prestigious",
      },
    ],
  },
];

export default function SelectedWorkSection() {
  return (
    <Section id="selected-work" heading="Selected Work" tone="sunk">
      <div className="grid gap-x-10 gap-y-8 min-[900px]:grid-cols-2">
        {programmes.map((programme) => (
          <article key={programme.title}>
            <h3 className="font-display font-semibold text-navy">{programme.title}</h3>
            <p className="font-sans text-sm text-ink-quiet">{programme.role}</p>
            <p className="mt-1.5 leading-relaxed">{programme.body}</p>
            <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-sans text-sm">
              {programme.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy no-underline hover:underline underline-offset-4"
                >
                  {link.label} &rarr;
                </a>
              ))}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-8 font-sans text-sm text-ink-quiet">
        Additional selected work &mdash; AIRib, MICCAI 2025, MedVersa, and
        LLM-augmented reporting studies &mdash; is on the{" "}
        <a href="/research.html" className="text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy">
          Research page
        </a>
        .
      </p>
    </Section>
  );
}

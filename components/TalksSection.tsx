import SectionHeading from "@/components/SectionHeading";

const talks = [
  {
    id: "glc4hsr-2026",
    title: "GLC4HSR Annual Conclave, Indian National Science Academy",
    type: "Panel",
    date: "Mar 2026",
  },
  {
    id: "rsna-2025-radle",
    title: "RSNA 2025 — Radiology's Last Exam (RadLE) 1.0",
    type: "Cutting-Edge presentation",
    date: "2025",
  },
  {
    id: "aocr-2025",
    title: "Asia Oceania Congress of Radiology (AOCR)",
    type: "Keynote",
    date: "Jan 2025",
  },
];

export default function TalksSection() {
  return (
    <section id="talks" className="py-14 px-6 border-b border-rule bg-elevated">
      <div className="max-w-4xl mx-auto space-y-7">
        <SectionHeading>Talks</SectionHeading>

        <ul className="space-y-4">
          {talks.map((talk) => (
            <li
              key={talk.id}
              className="grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-6"
              data-testid={`talk-${talk.id}`}
            >
              <span className="font-mono text-xs text-ink-faint sm:pt-1">{talk.date}</span>
              <div>
                <span className="font-display font-semibold text-navy">{talk.title}</span>
                <span className="font-sans text-sm text-ink-quiet"> · {talk.type}</span>
              </div>
            </li>
          ))}
        </ul>

        <a
          href="/talks.html"
          className="inline-block font-sans text-sm font-medium text-navy no-underline hover:underline underline-offset-4"
          data-testid="link-talks-full"
        >
          All talks →
        </a>
      </div>
    </section>
  );
}

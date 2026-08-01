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
    <section id="talks" className="py-12 px-6 border-b border-rule bg-paper-sunk">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-serif font-semibold">Talks</h2>

        <ul className="space-y-3">
          {talks.map((talk) => (
            <li key={talk.id} data-testid={`talk-${talk.id}`}>
              <span className="font-sans text-sm text-ink-quiet">{talk.date}</span>
              {" — "}
              <span className="font-medium">{talk.title}</span>
              <span className="font-sans text-sm text-ink-quiet"> ({talk.type})</span>
            </li>
          ))}
        </ul>

        <a
          href="/talks.html"
          className="font-sans text-sm text-primary hover:underline"
          data-testid="link-talks-full"
        >
          All talks →
        </a>
      </div>
    </section>
  );
}

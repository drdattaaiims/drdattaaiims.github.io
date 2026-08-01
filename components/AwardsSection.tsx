const awards = [
  {
    id: "aim100-2026",
    title: "AIM100 — India's Most Influential People Shaping AI",
    year: "2026",
    description: "Analytics India Magazine.",
  },
  {
    id: "rsna-2023",
    title: "RSNA Trainee Research Prize (MSK)",
    year: "2023",
    description: "The only award to an Indian resident that year, for the AIRib rib-fracture detection pipeline.",
  },
  {
    id: "young-achiever-2024",
    title: "Young Achiever in Radiology — National Diagnostic Summit",
    year: "2024",
  },
  {
    id: "gaims-2022",
    title: "GAIMS Global Healthcare Achievers' Award",
    year: "2022",
  },
];

export default function AwardsSection() {
  return (
    <section id="awards" className="py-12 px-6 border-b border-rule">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-serif font-semibold">Awards</h2>

        <ul className="space-y-3">
          {awards.map((award) => (
            <li key={award.id} data-testid={`award-${award.id}`}>
              <span className="font-sans text-sm text-ink-quiet">{award.year}</span>
              {" — "}
              <span className="font-medium">{award.title}</span>
              {award.description && (
                <p className="text-sm text-ink-quiet max-w-prose">{award.description}</p>
              )}
            </li>
          ))}
        </ul>

        <a
          href="/awards.html"
          className="font-sans text-sm text-primary hover:underline"
          data-testid="link-awards-full"
        >
          Full list →
        </a>
      </div>
    </section>
  );
}

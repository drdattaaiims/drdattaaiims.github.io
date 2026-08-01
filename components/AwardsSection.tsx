import SectionHeading from "@/components/SectionHeading";

const awards = [
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
    <section id="awards" className="py-14 px-6 border-b border-rule">
      <div className="max-w-4xl mx-auto space-y-7">
        <SectionHeading>Awards</SectionHeading>

        <ul className="space-y-4">
          {awards.map((award) => (
            <li
              key={award.id}
              className="grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-6"
              data-testid={`award-${award.id}`}
            >
              <span className="font-mono text-xs text-ink-faint sm:pt-1">{award.year}</span>
              <div>
                <span className="font-display font-semibold text-navy">{award.title}</span>
                {award.description && (
                  <p className="text-sm text-ink-quiet mt-1 max-w-prose">{award.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <a
          href="/awards.html"
          className="inline-block font-sans text-sm font-medium text-navy no-underline hover:underline underline-offset-4"
          data-testid="link-awards-full"
        >
          Full list →
        </a>
      </div>
    </section>
  );
}

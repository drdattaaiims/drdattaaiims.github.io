import Section from "@/components/Section";

const background = [
  {
    id: "simons-ashoka",
    title: "Simons Ashoka Early Career Fellow",
    organization: "Koita Centre for Digital Health, Ashoka University",
    period: "2025 – present",
  },
  {
    id: "crash-lab",
    title: "Founder and Group Lead, CRASH Lab",
    organization: "Clinician-led evaluation of responsible autonomous systems in healthcare",
    period: "2025 – present",
  },
  {
    id: "aiims-resident",
    title: "Former Senior Resident, Radiodiagnosis & IR",
    organization: "AIIMS New Delhi",
    period: "2023 – 2024",
  },
  {
    id: "training",
    title: "MD, AIIMS New Delhi · MBBS, JIPMER",
    organization: "Radiology training grounded in high-volume public-sector and rural care",
    period: "2014 – 2023",
  },
];

export default function ExperienceTimeline() {
  return (
    <Section id="experience" heading="Background" tone="sunk">
      <p className="mb-6 max-w-prose leading-relaxed text-ink-quiet">
        I moved from clinical radiology into full-time medical-AI evaluation
        after training and practice across public-sector, emergency and rural
        settings in India.
      </p>

      <ul className="space-y-5">
        {background.map((item) => (
          <li
            key={item.id}
            className="grid gap-1 min-[900px]:grid-cols-[9rem_minmax(0,1fr)] min-[900px]:gap-6"
            data-testid={"experience-" + item.id}
          >
            <p className="whitespace-nowrap font-mono text-xs text-ink-faint min-[900px]:pt-1">
              {item.period}
            </p>
            <div>
              <p className="font-display font-semibold text-navy">{item.title}</p>
              <p className="font-sans text-sm text-ink-quiet">{item.organization}</p>
            </div>
          </li>
        ))}
      </ul>

      <a
        href="/journey.html"
        className="mt-7 inline-block font-sans text-sm font-medium text-navy no-underline hover:underline underline-offset-4"
        data-testid="link-experience-full"
      >
        Full experience and education &rarr;
      </a>
    </Section>
  );
}

import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    id: "simons-ashoka",
    title: "Simons Ashoka Early Career Fellow, Koita Centre for Digital Health",
    organization: "Ashoka University",
    period: "Nov 2025 – present",
    description:
      "Full-time fellowship supported by a Simons Foundation grant to Ashoka University.",
  },
  {
    id: "crash-lab",
    title: "Founder and Group Lead, CRASH Lab",
    organization: "Koita Centre for Digital Health, Ashoka University",
    period: "May 2025 – present",
    description:
      "Centre for Responsible Autonomous Systems in Healthcare — clinician-led research group building benchmarks, datasets, and validation frameworks for medical AI.",
  },
  {
    id: "faculty-fellow",
    title: "Faculty Fellow, Koita Centre for Digital Health",
    organization: "Ashoka University",
    period: "Feb 2025 – Oct 2025",
  },
  {
    id: "faima-president",
    title: "National President, Federation of All India Medical Associations (FAIMA)",
    organization: "Elected, voluntary",
    period: "2024 – 2025",
  },
  {
    id: "locum",
    title: "Locum Radiologist",
    organization: "Medanta and Fortis Hospitals, Delhi NCR",
    period: "Dec 2024 – Jan 2025",
  },
  {
    id: "aiims-resident",
    title: "Senior Resident, Dept. of Radiodiagnosis & IR",
    organization: "AIIMS Delhi",
    period: "Sep 2023 – Nov 2024",
    description:
      "Independently interpreted 200+ studies during regular emergency shifts, predominantly CT and ultrasonography; taught junior residents; part-time AI research.",
  },
  {
    id: "harvard",
    title: "Medical AI Bootcamp 2024 — Participant",
    organization: "Rajpurkar Lab, Harvard University",
    period: "2024",
    description: "Training and research collaboration that led to a contribution to MedVersa.",
  },
  {
    id: "md",
    title: "M.D., Radiodiagnosis & Interventional Radiology",
    organization: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    period: "2020 – 2023",
  },
  {
    id: "mbbs",
    title: "M.B.B.S. (Gold Medallist)",
    organization: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER), Puducherry",
    period: "2014 – 2018",
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-14 px-6 border-b border-rule">
      <div className="max-w-6xl mx-auto space-y-7">
        <SectionHeading>Positions</SectionHeading>

        <ul className="space-y-6">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              className="grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-6"
              data-testid={`experience-${exp.id}`}
            >
              <p className="font-mono text-xs text-ink-faint sm:pt-1">{exp.period}</p>
              <div>
                <p className="font-display font-semibold text-navy">{exp.title}</p>
                <p className="font-sans text-sm text-ink-quiet">{exp.organization}</p>
                {exp.description && (
                  <p className="text-sm text-ink-quiet mt-1.5 max-w-prose">{exp.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

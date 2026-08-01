const experiences = [
  {
    id: "ashoka",
    title: "Faculty Fellow, Koita Centre for Digital Health",
    organization: "Ashoka University",
    period: "2025 – present",
    description:
      "Founder and Lab Lead, Centre for Responsible Autonomous Systems in Healthcare (CRASH Lab).",
  },
  {
    id: "harvard",
    title: "Visiting Researcher, Medical AI Bootcamp",
    organization: "Rajpurkar Lab, Harvard Medical School",
    period: "2024 – present",
    description: "Clinical validation of foundational AI algorithms in radiology.",
  },
  {
    id: "aiims-resident",
    title: "Senior Resident, Dept. of Radiodiagnosis & IR",
    organization: "AIIMS Delhi",
    period: "2023 – 2024",
    description:
      "Core clinical work, audited AI-augmented workflows, taught junior residents; part-time AI research (10,000+ images annotated).",
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
    <section id="experience" className="py-12 px-6 border-b border-rule">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-serif font-semibold">Positions</h2>

        <ul className="space-y-5">
          {experiences.map((exp) => (
            <li key={exp.id} data-testid={`experience-${exp.id}`}>
              <p className="font-sans text-sm text-ink-quiet">{exp.period}</p>
              <p className="font-medium">{exp.title}</p>
              <p className="text-ink-quiet">{exp.organization}</p>
              {exp.description && (
                <p className="text-sm text-ink-quiet mt-1 max-w-prose">{exp.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

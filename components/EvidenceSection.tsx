import SectionHeading from "@/components/SectionHeading";

const criteria = [
  {
    title: "Capability",
    body: "Can the system perform the task under clearly defined conditions?",
  },
  {
    title: "Reliability",
    body: "Is confidence aligned with correctness, and does performance hold across repeated runs?",
  },
  {
    title: "Safety",
    body: "Which errors can cause harm, and are unsafe confident errors distinguished from low-confidence failures?",
  },
  {
    title: "Deployment fit",
    body: "Does performance hold across languages, populations, sites, interfaces and real clinical workflows?",
  },
  {
    title: "Impact",
    body: "Does the system improve health-worker performance, care quality or patient outcomes?",
  },
];

export default function EvidenceSection() {
  return (
    <section className="py-14 px-6 border-b border-rule bg-elevated">
      <div className="max-w-4xl mx-auto space-y-7">
        <SectionHeading>What counts as evidence</SectionHeading>

        <dl className="space-y-4 max-w-prose">
          {criteria.map((c) => (
            <div key={c.title}>
              <dt className="font-display font-semibold text-navy">{c.title}</dt>
              <dd className="leading-relaxed text-ink-quiet">{c.body}</dd>
            </div>
          ))}
        </dl>

        <p className="max-w-prose leading-relaxed">
          Benchmarks are necessary. They are not sufficient. The evidence
          pathway should extend from retrospective evaluation to workflow
          testing, prospective validation and post-deployment monitoring.
        </p>

        <p className="font-sans text-sm text-ink-quiet border-l-2 border-orange pl-4">
          Model capability &rarr; Clinician action &rarr; Workflow performance
          &rarr; Care quality &rarr; Patient outcomes
        </p>
      </div>
    </section>
  );
}

import Section from "@/components/Section";

const projectLink =
  "text-navy underline decoration-navy/30 underline-offset-2 transition-colors hover:decoration-orange";

const criteria = [
  {
    title: "Capability",
    body: (
      <>
        Can the system perform the task under clearly defined conditions? In{" "}
        <a
          className={projectLink}
          href="https://crashlab.in/radle-technicalreport"
          target="_blank"
          rel="noopener"
        >
          RadLE 2.0
        </a>
        , the RadLE-C confidence-weighted capability index evaluates autonomous
        diagnostic agents in radiology against human radiologists, making the
        current capability gap explicit.
      </>
    ),
  },
  {
    title: "Reliability",
    body: (
      <>
        Is confidence aligned with correctness, and does performance remain
        stable across repeated runs?{" "}
        <a
          className={projectLink}
          href="https://crashlab.in/radle-technicalreport"
          target="_blank"
          rel="noopener"
        >
          RadLE-R
        </a>{" "}
        measures how often diagnoses delivered with high confidence are
        correct. We are also developing RADAR and TRUST metrics to assess the
        reliability of multi-agent systems that produce preliminary clinical
        records and radiology reports.
      </>
    ),
  },
  {
    title: "Safety",
    body: (
      <>
        Which errors could cause harm, and can an evaluation distinguish
        unsafe, confident errors from low-confidence failures? In{" "}
        <a
          className={projectLink}
          href="https://www.gatesfoundation.org/about/committed-grants/2025/11/inv-085290"
          target="_blank"
          rel="noopener"
        >
          V2DD
        </a>
        , we are developing metrics for ambient AI systems that convert
        doctor–patient conversations in local languages and dialects into
        structured clinical records and clinical ontologies, with attention to
        clinically significant omissions, hallucinations and translation
        errors. Through{" "}
        <a
          className={projectLink}
          href="https://kcdha.ashoka.edu.in/2025-researchdetails/evaluating-healthcare-ai-scribe-models-in-india-praimaan"
          target="_blank"
          rel="noopener"
        >
          PrAImaan
        </a>
        , we are extending safety evaluation across diverse Indian clinical
        contexts within a nationally coordinated framework.
      </>
    ),
  },
  {
    title: "Deployment fit",
    body: (
      <>
        Does performance hold across dialects, clinicians, sites, interfaces
        and real clinical workflows? Our multi-institutional studies examine
        when local, contextual metrics are needed for hard-to-verify or
        subjective tasks, including differences in physicians’ requirements,
        preferences and workflows. We presented initial healthcare work using
        DSPy and GEPA at{" "}
        <a className={projectLink} href="/talks.html">
          RSNA 2025
        </a>
        ; current work benchmarks state-of-the-art small automatic speech
        recognition models for deployment on edge devices in low-connectivity
        settings.
      </>
    ),
  },
  {
    title: "Impact",
    body: (
      <>
        Does the system improve health-worker performance, care quality or
        patient outcomes? In{" "}
        <a
          className={projectLink}
          href="https://doi.org/10.1056/AIoa2500595"
          target="_blank"
          rel="noopener"
        >
          MedVersa
        </a>
        , led by Harvard investigators, generalist-model draft reports reduced
        radiologists’ reporting time and clinically important discrepancies
        while supporting accurate reporting.
      </>
    ),
  },
];

export default function EvidenceSection() {
  return (
    <Section heading="What we evaluate for AI systems" tone="sunk">
      <dl className="grid gap-x-10 gap-y-5 min-[900px]:grid-cols-2">
        {criteria.map((c) => (
          <div key={c.title}>
            <dt className="font-display font-semibold text-navy">{c.title}</dt>
            <dd className="leading-relaxed text-ink-quiet">{c.body}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 max-w-prose leading-relaxed">
        Benchmarks are increasingly necessary, but current leaderboards are not
        sufficient. We are extending the evidence pathway from retrospective,
        leaderboard-based evaluation to workflow testing and prospective
        validation.
      </p>
    </Section>
  );
}

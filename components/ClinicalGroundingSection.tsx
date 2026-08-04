import Section from "@/components/Section";

export default function ClinicalGroundingSection() {
  return (
    <Section heading="The work starts with how care is actually delivered.">
      <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        <div>
          <p className="font-display font-semibold text-navy">Rural primary care &mdash; JIPMER</p>
          <p className="leading-relaxed mt-1.5">
            During a two-month residential posting at a primary health centre
            in Ramanathapuram, I shared alternate emergency coverage, conducted
            regular NCD clinics and camps, and referred patients to higher
            centres in a setting affected by medicine shortages and the absence
            of operative facilities. I worked with patients in Tamil and Hindi.
          </p>
        </div>
        <div>
          <p className="font-display font-semibold text-navy">High-volume radiology &mdash; AIIMS New Delhi</p>
          <p className="leading-relaxed mt-1.5">
            I worked in emergency, inpatient and outpatient radiology for
            patients referred from across India &mdash; interpreting more than
            200 examinations independently during emergency shifts, mostly CT
            and ultrasonography, through roughly a year of COVID-related duties
            and the move from semi-digital to fully digital imaging.
          </p>
        </div>
      </div>

      <p className="leading-relaxed mt-6 max-w-prose">
        These experiences shape the evaluations I build. A useful system must
        perform with incomplete information, limited time, variable
        infrastructure and constrained referral capacity. It must know when not
        to answer, and it must reduce rather than transfer clinical burden.
      </p>
    </Section>
  );
}

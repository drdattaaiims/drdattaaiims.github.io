import SectionHeading from "@/components/SectionHeading";

export default function ClinicalGroundingSection() {
  return (
    <section className="py-14 px-6 border-b border-rule">
      <div className="max-w-6xl mx-auto space-y-5">
        <SectionHeading>The work starts with how care is actually delivered.</SectionHeading>

        <div className="max-w-prose space-y-4 leading-relaxed">
          <p>
            My clinical training spans rural primary care at JIPMER and
            high-volume radiology at AIIMS New Delhi.
          </p>
          <p>
            During a two-month residential posting at a primary health centre
            in Ramanathapuram, I shared alternate emergency coverage, conducted
            regular NCD clinics and camps, and referred patients to higher
            centres in a setting affected by medicine shortages and the
            absence of operative facilities. I worked with patients in Tamil
            and Hindi.
          </p>
          <p>
            At AIIMS, I worked in emergency, inpatient and outpatient
            radiology services for patients referred from across India. I
            regularly interpreted more than 200 examinations independently
            during emergency shifts, predominantly CT and ultrasonography,
            completed approximately one year of COVID-related duties, and
            worked through the institution's transition from semi-digital to
            fully digital imaging workflows.
          </p>
          <p>
            These experiences shape the evaluations I build. A useful system
            must perform with incomplete information, limited time, variable
            infrastructure and constrained referral capacity. It must know
            when not to answer, and it must reduce rather than transfer
            clinical burden.
          </p>
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "@/components/SectionHeading";

export default function BiographySection() {
  return (
    <section className="py-14 px-6 border-b border-rule">
      <div className="max-w-4xl mx-auto space-y-5">
        <SectionHeading>Biography</SectionHeading>
        <p className="max-w-prose leading-relaxed text-ink-quiet">
          Suvrankar Datta, MD, is a radiologist and physician-scientist at
          Ashoka University, where he is a Simons Ashoka Early Career Fellow
          at the Koita Centre for Digital Health and Founder and Group Lead of
          CRASH Lab. He trained in rural primary care at JIPMER and in
          radiodiagnosis and interventional radiology at AIIMS New Delhi. His
          RSNA Trainee Research Prize&ndash;winning work on automated
          rib-fracture detection sits alongside a MICCAI 2025 paper and a
          NEJM AI paper (MedVersa) as co-author. His current work focuses on
          clinical AI evaluation, safeguards, and research partnerships for
          resource-constrained health systems, including two Gates
          Foundation-supported programmes (PrAImaan, V2DD) and a DST&ndash;A*STAR
          India&ndash;Singapore radiology AI collaboration.
        </p>
      </div>
    </section>
  );
}

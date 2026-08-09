import Section from "@/components/Section";

const publications = [
  {
    title: "MedVersa",
    summary: "Generalist foundation model for diverse medical imaging tasks",
    venue: "NEJM AI · 2026",
    href: "https://doi.org/10.1056/AIoa2500595",
  },
  {
    title: "Radiology’s Last Exam",
    summary: "Frontier multimodal AI versus human experts",
    venue: "Co-first author · 2025",
    href: "https://arxiv.org/abs/2509.25559",
  },
  {
    title: "Fine-Grained Rib Fracture Diagnosis",
    summary: "Hyperbolic embeddings for structured diagnostic labels",
    venue: "MICCAI · 2025",
    href: "https://doi.org/10.1007/978-3-032-05182-0_22",
  },
];

export default function SelectedPublicationsSection() {
  return (
    <Section heading="Selected Publications">
      <ul className="grid gap-x-10 gap-y-6 min-[900px]:grid-cols-3">
        {publications.map((publication) => (
          <li
            key={publication.href}
            className="border-l-2 border-rule pl-4 transition-colors hover:border-navy"
          >
            <a
              href={publication.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-semibold text-navy no-underline hover:underline underline-offset-4"
              data-testid={"link-pub-" + publication.href}
            >
              {publication.title}
            </a>
            <p className="mt-1 leading-relaxed text-ink-quiet">{publication.summary}</p>
            <p className="mt-2 font-sans text-sm text-ink-quiet">{publication.venue}</p>
          </li>
        ))}
      </ul>

      <a
        href="/publications.html"
        className="mt-7 inline-block font-sans text-sm font-medium text-navy no-underline hover:underline underline-offset-4"
        data-testid="link-publications-full"
      >
        Full publication list &rarr;
      </a>
    </Section>
  );
}

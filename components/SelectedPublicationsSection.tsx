import SectionHeading from "@/components/SectionHeading";

const publications = [
  {
    citation:
      "Zhou HY, Acosta JN, Adithan S, Datta S, Topol EJ, Rajpurkar P. MedVersa: a generalist foundation model for diverse medical imaging tasks.",
    venue: "NEJM AI, 2026;3(4)",
    href: "https://doi.org/10.1056/AIoa2500595",
  },
  {
    citation:
      "Datta S*, Buchireddygari D*, et al. Radiology's Last Exam (RadLE): benchmarking frontier multimodal AI against human experts and a taxonomy of visual reasoning errors in radiology.",
    venue: "arXiv preprint, 2025 (* co-first authors)",
    href: "https://arxiv.org/abs/2509.25559",
  },
  {
    citation:
      "Pate S, Farooq A, Datta S, et al. Fine-grained rib fracture diagnosis with hyperbolic embeddings.",
    venue: "MICCAI 2025",
    href: "https://doi.org/10.1007/978-3-032-05182-0_22",
  },
  {
    citation:
      "Datta S, Sarangi PK. From chatbots to agentic workflows: ensuring responsible deployment of large language models in radiology.",
    venue: "Indian Journal of Radiology & Imaging, 2026;36(2):286–288",
    href: "https://doi.org/10.1055/s-0045-1811264",
  },
];

export default function SelectedPublicationsSection() {
  return (
    <section className="py-14 px-6 border-b border-rule bg-elevated">
      <div className="max-w-6xl mx-auto space-y-7">
        <SectionHeading>Selected Publications</SectionHeading>

        <ul className="space-y-5">
          {publications.map((pub) => (
            <li key={pub.href} className="max-w-prose border-l-2 border-rule pl-4 hover:border-navy transition-colors">
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink no-underline hover:underline underline-offset-4"
                data-testid={`link-pub-${pub.href}`}
              >
                {pub.citation}
              </a>
              <p className="font-sans text-sm text-ink-quiet mt-1">{pub.venue}</p>
            </li>
          ))}
        </ul>

        <a
          href="/publications.html"
          className="inline-block font-sans text-sm font-medium text-navy no-underline hover:underline underline-offset-4"
          data-testid="link-publications-full"
        >
          Full publication list →
        </a>
      </div>
    </section>
  );
}

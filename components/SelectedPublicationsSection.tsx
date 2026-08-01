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
    <section className="py-12 px-6 border-b border-rule bg-paper-sunk">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-serif font-semibold">Selected Publications</h2>

        <ul className="space-y-4">
          {publications.map((pub) => (
            <li key={pub.href} className="max-w-prose">
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                data-testid={`link-pub-${pub.href}`}
              >
                {pub.citation}
              </a>
              <p className="font-sans text-sm text-ink-quiet">{pub.venue}</p>
            </li>
          ))}
        </ul>

        <a
          href="/publications.html"
          className="font-sans text-sm text-primary hover:underline"
          data-testid="link-publications-full"
        >
          Full publication list →
        </a>
      </div>
    </section>
  );
}

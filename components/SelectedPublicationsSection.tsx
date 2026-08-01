const publications = [
  {
    citation:
      "Zhou HY, Acosta JN, Adithan S, Datta S, Topol EJ, Rajpurkar P. MedVersa: a generalist foundation model for medical image interpretation.",
    venue: "Under review, NEJM AI",
    href: "https://arxiv.org/abs/2405.07988",
  },
  {
    citation:
      "Pate S, Farooq A, Datta S, et al. Fine-grained rib fracture diagnosis with hyperbolic embeddings.",
    venue: "MICCAI 2025 (accepted, top 9%)",
    href: "https://arxiv.org/abs/2504.10889",
  },
  {
    citation:
      "Sarangi PK, Datta S. From chatbots to agentic workflows: ensuring responsible deployment of large language models in radiology.",
    venue: "Indian Journal of Radiology & Imaging, 2025",
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

/**
 * Section heading with a short orange rule above it — the one place the brand's
 * accent colour appears in body content. Keeps every section title identical.
 */
export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <span aria-hidden="true" className="block w-8 h-[3px] bg-orange" />
      <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
        {children}
      </h2>
    </div>
  );
}

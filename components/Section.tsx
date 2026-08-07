import type { ReactNode } from "react";

/**
 * Editorial two-column section shell: the heading sits in a fixed left column
 * and the content fills the wider right column. On narrow screens the two
 * collapse to a single stack (heading above content). This keeps every
 * section using the full page width intentionally rather than leaving a dead
 * right margin.
 */
export default function Section({
  id,
  heading,
  tone = "default",
  children,
}: {
  id?: string;
  heading: ReactNode;
  tone?: "default" | "sunk";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={
        "border-b border-rule px-6 py-10 min-[900px]:py-14 " +
        (tone === "sunk" ? "bg-elevated" : "")
      }
    >
      <div className="mx-auto grid max-w-[1120px] gap-x-12 gap-y-6 min-[900px]:grid-cols-[14rem_minmax(0,1fr)]">
        <div className="min-[900px]:pt-1">
          <span aria-hidden="true" className="mb-3 block h-[3px] w-8 bg-orange" />
          <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
            {heading}
          </h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

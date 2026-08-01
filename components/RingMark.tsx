/**
 * Geometric reconstruction of the CRASH Lab mark: an open outer ring ("C"),
 * a square aperture with an inscribed circular cut, concentric inner rings,
 * and a horizontal tick running out through the ring's gap. Reads as a C, a
 * targeting reticle, and a lens aperture at once.
 *
 * Proportions measured from the lab's own logo asset. Drawn entirely in
 * `currentColor` with no filled counter-shapes, so it sits correctly on any
 * background.
 */
export default function RingMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      {/* Outer ring, open through a 70-degree gap on the right */}
      <path
        d="M81.7 72.2 A38.7 38.7 0 1 1 81.7 27.8"
        stroke="currentColor"
        strokeWidth="10.6"
        fill="none"
      />
      {/* Square aperture with inscribed circular cut */}
      <path
        d="M28 28 H72 V72 H28 Z M50 50 m-22 0 a22 22 0 1 0 44 0 a22 22 0 1 0 -44 0"
        fill="currentColor"
        fillRule="evenodd"
      />
      {/* Inner ring */}
      <circle cx="50" cy="50" r="8.8" stroke="currentColor" strokeWidth="4.4" fill="none" />
      {/* Centre dot */}
      <circle cx="50" cy="50" r="4.3" fill="currentColor" />
      {/* Tick through the gap */}
      <rect x="56.3" y="47.22" width="31.9" height="5.56" fill="currentColor" />
    </svg>
  );
}

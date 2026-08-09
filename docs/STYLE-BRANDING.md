# Website style and brand system

This document is the implementation contract for `drdattaaiims.github.io`.
Its purpose is to keep the site recognisably Suvrankar Datta's across every
route, viewport and future content update.

## Brand character

The site should feel rigorous, clinical and editorial: confident without being
corporate, and technical without becoming visually cold. It shares navy and
orange signals with CRASH Lab while retaining a more personal, long-form voice.

- Navy (`#081d3a`) carries identity, headings and primary actions.
- Slate blue (`#234c6a`) carries links and secondary emphasis.
- Orange (`#ea580c`) is a small active/accent signal, never a large surface.
- Warm canvas (`#fafaf8`), white and light grey create the page rhythm.
- Corners remain square. Heavy shadows, gradients and decorative card grids do
  not belong to this system.

## Typography

Fonts are self-hosted so layout and screenshots do not depend on a third-party
font service.

- Space Grotesk: display headings, brand name and section headings.
- Lexend: navigation, labels, buttons, metadata and supporting copy.
- Source Serif 4: long-form editorial text.
- System monospace: codes, compact dates and technical identifiers.

Long prose is capped at `68ch`. Avoid forcing bibliography entries or dense
research text into a wide full-screen column.

## Canonical geometry

All cross-page dimensions are tokens in `index.css`; page components must not
redefine them.

- Fixed header: `56px` high.
- Main container: `1120px` maximum with `24px` side gutters.
- Desktop editorial rail: `224px`, followed by a `48px` gap.
- Standard-page top space below the fixed header: `32px` mobile, `64px`
  desktop, and `80px` on wide screens.
- Desktop/mobile navigation breakpoint: `900px`.
- Fragment targets clear the header through shared `scroll-padding-top` and
  `scroll-margin-top` rules.
- The shell declares `100vh` before `100dvh`, keeping the footer pinned while
  retaining older Safari support.

The homepage may use its purpose-built hero composition. Every other content
route uses the same editorial grid and title position.

## Header and navigation

The header is the same component on every route. Desktop navigation contains:
Work, Clinical & Global Health, Publications, Talks, Awards, Journey, CV and
Contact. A child page may mark Work as its parent section. The active state uses
navy text and a narrow orange rule.

At widths below `900px`, navigation becomes an opaque dropdown. It must:

- expose a 44 by 44 pixel menu target;
- report its state with `aria-expanded`;
- move focus into the open menu;
- close on Escape, backdrop click, link activation or desktop resize;
- prevent the covered page from receiving focus or scrolling.

## Page and content patterns

- Standard pages use the shared title rail and constrained body column.
- H2 sections use a divider and a short orange marker.
- Notices use a white surface with an orange left rule.
- Links in running text are visibly underlined; colour alone is insufficient.
- Buttons and other controls have a minimum 44px target height.
- Journey's timeline is a content module inside the standard shell, not a
  separate layout system.
- CV print rules live in the shared stylesheet.
- The footer is always the same navy component and includes secondary routes.

Homepage sections alternate only among the approved canvas, elevated and white
surfaces. Alternation should clarify hierarchy, not create decorative striping.

## Route and metadata contract

`content/routes.json` is the only route registry. Each route defines its path,
output file, title, description, canonical URL, indexing policy, Open Graph and
Twitter data. Structured data belongs in the route's `jsonLd` field.

The homepage Person record must preserve the verified ORCID, GitHub, LinkedIn,
ResearchGate and Google Scholar identities. `media.html` and the archived
AI-radiology article remain `noindex`; redirects and errors do not enter the
sitemap.

Do not create a route HTML file in `public/`. The collision check deliberately
fails when a generated route or sitemap has a passthrough counterpart. Delete
obsolete files explicitly; never glob-delete `public/*.html`, because the
Google Search Console verification file lives there.

## Accessibility and responsive requirements

- One H1, header, main and footer per rendered route.
- Keyboard-visible focus treatment on every interactive control.
- A skip link to main content.
- Descriptive image alternatives and `noopener` on new-tab links.
- No horizontal overflow from `320px` through wide desktop sizes.
- Reduced-motion preferences disable non-essential animation.
- Contact and other fragment links land visibly below the fixed header.
- Mobile content order prioritises identity and meaning over decoration.

## Change workflow

Keep mechanical migration and intentional content editing conceptually
separate. Content captured in `content/pages/` is protected by
`content/content-contract.json`; deliberate editorial changes require an
explicit contract update.

Before release, the static validators, responsive interaction suite, axe
accessibility suite and visual regression suite must all pass. Visual references
are created in the pinned Linux CI container and reviewed before they are
committed. Deployment runs the full gate again before publishing to GitHub
Pages.

# drdattaaiims.github.io

Personal academic site of Dr. Suvrankar Datta — Radiologist and health-AI
researcher, Simons Ashoka Early Career Fellow at the Koita Centre for
Digital Health, Ashoka University, and Founder and Group Lead of the
Centre for Responsible Autonomous Systems in Healthcare (CRASH Lab).

Live at [drdattaaiims.github.io](https://drdattaaiims.github.io).

## Architecture

Every route uses one React site shell, one navigation model, one footer and one
stylesheet. Route content and metadata are registered centrally in `content/`;
the build renders each route to static HTML for GitHub Pages. The prerenderer
refuses to overwrite a file copied from `public/`, preventing silent route and
sitemap collisions.

- `content/routes.json` — route, canonical, robots, social and structured-data metadata.
- `content/pages/` — route-specific editorial content captured independently of the shell.
- `components/site/` — canonical header, footer and page shell.
- `index.css` — shared brand tokens, typography, layout and responsive rules.
- `scripts/prerender-pages.mjs` — static generation and sitemap output.
- `scripts/validate-*.mjs` — metadata, content-parity and style invariants.
- `tests/` — responsive, interaction, accessibility and visual regression checks.
- `public/` — passthrough assets only, including the CV and search verification file.

The implementation rules are documented in
[`docs/STYLE-BRANDING.md`](docs/STYLE-BRANDING.md).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/`. `npm run check` runs the TypeScript compiler with no emit.

Before committing a site change, run:

```bash
npm run qa:static
npm run test:ui
npm run test:a11y
npm run test:visual
```

Visual references are generated in the pinned Linux Playwright container used
by CI, not on a developer workstation. The `Generate Linux visual baselines`
workflow publishes updated references as an artifact for deliberate review and
commit.

## Deploy

Pull requests must pass the complete site-quality workflow. Pushes to `main`
repeat that release gate, then publish `dist/` to GitHub Pages. A failed check
cannot reach the deployment job.

## Contact

- Email: [suvrankar.datta@ashoka.edu.in](mailto:suvrankar.datta@ashoka.edu.in)
- [LinkedIn](https://www.linkedin.com/in/suvrankardatta/)
- [Twitter/X](https://twitter.com/DrDatta_AIIMS)

## License

Written content, images, and design are licensed under
[CC BY 4.0](LICENSE). Source code is provided for reference.

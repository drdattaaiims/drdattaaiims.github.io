# drdattaaiims.github.io

Personal academic site of Dr. Suvrankar Datta — Radiologist and health-AI
researcher, Simons Ashoka Early Career Fellow at the Koita Centre for
Digital Health, Ashoka University, and Founder and Group Lead of the
Centre for Responsible Autonomous Systems in Healthcare (CRASH Lab).

Live at [drdattaaiims.github.io](https://drdattaaiims.github.io).

## Contents

- `index.html`, `main.tsx`, `App.tsx`, `components/`, `pages/` — the React/Vite homepage.
- `public/*.html` — statically served subpages (research, publications, lab, talks, grants, awards, media, disclosures). These are plain HTML, not part of the React build, and are copied to `dist/` verbatim by Vite.
- `public/cv/` — versioned CV PDF.
- `attached_assets/` — source images and documents referenced by the build.

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

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with
Vite and publishes `dist/` to GitHub Pages.

## Contact

- Email: [suvrankar.datta@ashoka.edu.in](mailto:suvrankar.datta@ashoka.edu.in)
- [LinkedIn](https://www.linkedin.com/in/suvrankardatta/)
- [Twitter/X](https://twitter.com/DrDatta_AIIMS)

## License

Written content, images, and design are licensed under
[CC BY 4.0](LICENSE). Source code is provided for reference.

# Ishaan Sendhil

A small static personal website. Plain HTML and CSS; the only browser JavaScript updates the Toronto clock. No frameworks, animations, external fonts, or installed dependencies.

## Edit

- `index.html`: name and contact links.
- `about/index.html`: replace “More soon.” with your bio.
- `projects/index.html`: replace “More soon.” with your projects.
- `photos/index.html`: add your photos.
- `music/index.html`: add your music.
- `styles.css`: layout and colors (`--blue` controls the heading color).
- `clock.js`: date and time in `America/Toronto`, including daylight saving time.

## Preview

Open `index.html` directly, or use Node.js 18+:

```sh
npm run dev
```

Visit http://localhost:4173. No `npm install` is needed. `npm run build` copies the public files to `dist/`; `npm run preview` serves that folder. The scripts also run directly with `node scripts/build.mjs` and `node scripts/serve.mjs`.

## GitHub Pages

The site can be served directly from the repository root. In the repository's **Settings → Pages**, select **Deploy from a branch**, your default branch, and **/(root)**. This replaces the old Vite/gh-pages build setup. About and Projects have their own folders so direct links work on GitHub Pages.

The optional `.openai/hosting.json` is for the private review preview in Sites; GitHub Pages does not use it.

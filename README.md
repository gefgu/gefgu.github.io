# gustavohsantos.com

Personal site of Gustavo H. Santos, built with [Astro](https://astro.build) on the minimal [Astro Nano](https://github.com/markhorn-dev/astro-nano) theme (MIT).

All content is Markdown in `src/content/`:

- `blog/` posts
- `projects/` open-source libraries and tools
- `papers/` publications (PDFs in `public/papers/`)
- `work/` experience

Site name, links and descriptions live in `src/consts.ts`.

```bash
npm install
npm run dev      # needs Node 18.20.8+
npm run build
```

Pushing to `main` deploys to GitHub Pages via `.github/workflows/astro.yml`.

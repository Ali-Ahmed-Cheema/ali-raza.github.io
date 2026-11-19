# Ali Raza | Personal Portfolio

A single-page personal portfolio for Ali Raza, Software Engineering student at the University of Management and Technology (UMT), Sialkot, Pakistan.

Built with React, Vite, Tailwind CSS v4 and Lucide React. Fonts are self-hosted through Fontsource, so the page makes no third-party requests.

## Getting started

Requires Node.js 20.19+ (or 22.12+).

```bash
npm install
npm run dev       # development server with instant Hot Module Replacement
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Adding your photo

Put the photograph inside the `images/` folder. Any file name works (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`); the first image found is used in the hero section. Until a photo is added, the hero shows an "AR" monogram. A portrait with the face in the upper half crops best (4:5 ratio).

## Editing content

All personal details and links live in `src/data/profile.js`. Change a value there and the whole page updates.

## Project structure

```text
ali-raza-portfolio/
├── images/              Profile photograph
├── public/
│   └── CNAME            Custom domain for GitHub Pages
├── src/
│   ├── components/      Navbar, Hero, About, Contact, Footer, BrandIcons
│   ├── data/profile.js  Personal details and links
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        Tailwind theme and global styles
├── index.html
├── vite.config.js
└── package.json
```

## Deploying to GitHub Pages

This site uses a custom domain (`public/CNAME`), so `base` in `vite.config.js` is `/`.

1. Run `npm run build`.
2. Publish the contents of `dist/` to the repository's Pages branch (or use a GitHub Actions workflow that runs the build).

If you serve it from `https://<user>.github.io/<repo>/` instead, build with `VITE_BASE=/<repo>/ npm run build`.

## License

MIT, see [LICENSE](LICENSE).

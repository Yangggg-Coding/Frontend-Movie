# Frontend Movie

## GitHub Pages deployment

The GitHub Actions workflow builds the app from `frontend-movie/` and publishes
the generated `dist/` directory, so the deployed site has `index.html` at its
root. In repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**. Each push to `main` deploys the site.

The production build uses `/Frontend-Movie/` as its base path and hash-based
routes so links and page refreshes work on GitHub Pages.

## Local development

Run `npm install`, `npm run dev`, and `npm run build` from this directory.

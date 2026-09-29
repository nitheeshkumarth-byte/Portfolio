# Nitheesh Kumar Thadikamalla — Portfolio

A personal portfolio site built with React + Vite. Terminal-styled hero, project slideshow, and sections for experience, skills, and certifications.

## Tech

- React 19
- Vite
- Plain CSS (custom properties, no framework)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `dist/` — ready to deploy anywhere static (Vercel, Netlify, GitHub Pages).

## Deploying on Vercel

**Option A — Vercel's built-in Git integration (simplest):**
1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub → **Add New → Project**.
3. Import this repo. Vercel auto-detects the Vite framework preset — no config needed.
4. Deploy. Every future `git push` to `main` auto-redeploys.

**Option B — GitHub Actions (`.github/workflows/deploy.yml`, included in this repo):**
This repo ships with a workflow that builds and deploys via the Vercel CLI from GitHub Actions instead of Vercel's own Git integration — useful if you want deploys to run as part of a broader CI pipeline you control.

1. In the Vercel dashboard, create the project once (`vercel link` locally, or import + then disconnect Git integration so Actions is the only deploy path).
2. Get three values:
   - `VERCEL_TOKEN` — Vercel dashboard → Settings → Tokens → Create.
   - `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` — run `vercel link` locally in this folder, then read them from the generated `.vercel/project.json`.
3. In your GitHub repo: **Settings → Secrets and variables → Actions**, add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
4. Push to `main` — Actions builds and deploys to production. Pull requests get a preview deployment commented on the PR.

## New projects appear automatically

The GitHub repo list is fetched **at build time** by the `github-repos` plugin in `vite.config.js` — there is no list to maintain. A repo becomes a project slide (tagged "auto") when:

- it belongs to `githubUsername` in `src/data.js`,
- it is not a fork and not archived,
- it has a description set on GitHub,
- it isn't the portfolio repo itself and isn't already covered by a hand-curated entry.

So: create a repo, add a description on GitHub, push → it appears on the next build/deploy. Name, description, topics (shown as stack pills), repo link, and — if the repo's homepage field is set — a "live demo" link are all pulled from the GitHub API. Dev servers fetch once at startup, so restart `npm run dev` to pick up new repos locally.

If you want full control over wording instead, add a hand-curated entry to the `projects` array (like the existing three); it will be excluded from the auto list automatically.

CI note: the workflow passes `GITHUB_TOKEN` to the build so API calls are rate-limited at 5,000/h instead of 60/h. Locally an unauthenticated fetch is fine. If the API is unreachable the build still succeeds — it just ships without auto-fetched projects.

## Editing content

All text content (name, projects, skills, certifications, links, section order/labels) lives in one place: `src/data.js`. Edit that file to update the site — no need to touch any component.

## Project structure

```
vite.config.js         # build-time GitHub repo fetch (virtual:github-repos)
index.html             # meta, favicon, JSON-LD, theme preload
public/
  favicon.svg
src/
  data.js            # all portfolio content
  index.css          # global styles & design tokens
  App.jsx            # page layout
  components/
    Nav.jsx
    Hero.jsx
    About.jsx
    Experience.jsx
    Projects.jsx       # slideshow/carousel
    Skills.jsx
    Certifications.jsx
    Contact.jsx
    Footer.jsx
    Backdrop.jsx        # decorative background
    icons/
      ProjectIcons.jsx
      iconMap.js
      ChevronIcons.jsx
```

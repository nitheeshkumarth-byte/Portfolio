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

## Editing content

All text content (name, projects, skills, certifications, links) lives in one place: `src/data.js`. Edit that file to update the site — no need to touch any component.

## Adding a new project automatically

Rather than fully auto-pulling every repo (which you can't curate), new projects use an **approval gate**:

1. Open `src/data.js` and add the repo's name (just the name, e.g. `'my-new-repo'`) to the `approvedRepos` array.
2. Commit and push.

That's the entire approval step — nothing from GitHub shows up until a repo's name is explicitly added there. Once approved, the site fetches that repo's description, language, and topics live from the public GitHub API at page load and renders it as a slide (tagged "auto" so it's visually distinct from your hand-written case studies). If you want full control over wording instead, just add a hand-curated entry to the `projects` array like the existing three.

## Project structure

```
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
      ChevronIcons.jsx
```

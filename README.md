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

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub → **Add New → Project**.
3. Import this repo. Vercel auto-detects the Vite framework preset — no config needed.
4. Deploy. Every future `git push` to `main` auto-redeploys.

## Editing content

All text content (name, projects, skills, certifications, links) lives in one place: `src/data.js`. Edit that file to update the site — no need to touch any component.

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

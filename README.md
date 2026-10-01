# Nithya's Portfolio

Next.js + TypeScript + Tailwind + Framer Motion. Inspired by the structure of
[Swarnesh Jha's portfolio](https://swarnesh-portfolio-website.vercel.app/) (journey hero,
project cards with metrics, experience timeline, frameworks section) but with its own content
and visual identity.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where to edit things

Almost everything you'd want to change lives in one file:

- **`src/data/content.ts`** — your name, tagline, journey milestones, projects, experience,
  education, and frameworks. Edit this to update the site without touching any component.

A few things in there are marked `// EDIT ME` because I didn't have the real info:
- Exact years at Christ University (I guessed 2017–2021, confirm or fix)
- Links for the ESG Survey Pipeline project (code repo, live demo) once you deploy it
- The "In Practice" examples under Frameworks — I wrote plausible ones from what I know of your
  work, but verify each one is actually true before this goes live

## Adding a new project

Add an entry to the `projects` array in `src/data/content.ts`. If it needs its own case-study
page, copy `src/app/projects/esg-survey-pipeline/page.tsx` to a new folder under
`src/app/projects/` and link it via `storyHref`.

## Deploying

This is a standard Next.js app, so Vercel is the easiest path:

```bash
npx vercel
```

Or connect the GitHub repo to Vercel for push-to-deploy.

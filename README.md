# Canopy 

**Gamified, verified environmental action for Indian schools and colleges.**

Built for **SIH25009 — Gamified Environmental Education Platform for Schools and Colleges** (Govt. of Punjab, Smart Education), VIT Bhopal University Internal Hackathon 2026.

## The problem

Most CBSE schools already run an Eco Club under NEP 2020 / Mission LiFE. The activity is
real — waste drives, tree plantations, water audits — but it lives in posters, logbooks
and WhatsApp photos. Nothing is tracked, compared across schools, or turned into a habit
students come back to.

## What Canopy does

Students complete short **eco-quests** tied to their class syllabus and Mission LiFE
themes, submit a **geo-tagged photo** as proof, and a teacher/eco-club **coordinator**
verifies it in one tap. Verified actions earn **XP, streaks and badges**, and roll up
into **class, school and district leaderboards** — plus an **impact dashboard** schools
can use for their existing Environment Education Programme reporting.

This repo is the interactive prototype: four real, navigable views —

| View | Tab | What it shows |
|---|---|---|
| Overview | `Overview` | Pitch + a click-through demo of the quest -> verify -> earn loop |
| Student | `Student` | XP/level, quest list, quest submission flow, badge shelf, leaderboard |
| Coordinator | `Coordinator` | Verification queue a teacher clears between periods |
| Impact | `Impact` | District-level rollup for admin/government reporting |

## Tech stack

- **Frontend:** React 19 + Vite + Tailwind CSS, self-hosted Fraunces/Inter via `@fontsource`
- **Icons:** lucide-react
- **State:** local component state + mock data (`src/data/mock.js`) for this prototype
- **Deployment:** static build, deployed on Vercel (`vercel.json` included)

### Planned production stack (see idea deck for details)
- FastAPI backend + PostgreSQL (via Supabase) for auth, quest data, submissions
- Supabase Storage for photo proof, with EXIF/geo validation
- A lightweight on-device image classifier (MobileNetV3, same pattern as our CivicSense
  hackathon build) to pre-screen submissions before they reach a coordinator
- PWA service worker for offline quest capture in low-connectivity schools

## Running locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
```

## Deploying

This repo is Vercel-ready:

```bash
npm i -g vercel
vercel        # first deploy, follow prompts
vercel --prod # production deploy
```

Or connect the GitHub repo directly in the Vercel dashboard — `vercel.json` already
points it at `npm run build` and the `dist/` output.



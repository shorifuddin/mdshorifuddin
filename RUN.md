# Portfolio Site — Run Guide

Modern personal portfolio + blog built with Next.js 14 (App Router) and React 18.

## Preview locally
```bash
cd portfolio-shorif
npm install
npm run dev
```
Open http://localhost:3000

## Routes
- `/` — home (hero, services, featured works, latest articles)
- `/about` — about + education + research
- `/resume` — experience timeline, skills, knowledge tags
- `/works` — filterable project grid
- `/works/[slug]` — full case study per project (6 projects)
- `/blog` — filterable article grid
- `/blog/[slug]` — full article page (12 articles)
- `/contact` — contact info + email form

Old URLs redirect: `/home-1` → `/`, `/portfolio` → `/works`.

## Editing content
- Profile, skills, experience: `app/lib/data.js`
- Projects & case studies: `app/lib/works.js`
- Blog articles: `app/lib/posts-1.js` + `app/lib/posts-2.js` (body blocks: p | h | list | code | quote)
- Design tokens: `app/globals.css` (dark default, light toggle, persisted)

## Deploy (free, easiest)
1. Push this folder to a GitHub repo
2. Import it on https://vercel.com (free) — it auto-detects Next.js
3. You get a live URL like `shorif-uddin.vercel.app`

## Contact form
Submissions open the visitor's email app addressed to mcshorif@gmail.com.
(Static sites can't send mail by themselves — this needs no signup or backend.)

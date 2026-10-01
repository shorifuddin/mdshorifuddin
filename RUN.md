# Portfolio Site — Run Guide

## Preview locally
```bash
cd portfolio-shorif
npm install
npm run dev
```
Open http://localhost:3000/home-1

## Deploy (free, easiest)
1. Push this folder to a GitHub repo
2. Import it on https://vercel.com (free) — it auto-detects Next.js
3. You get a live URL like `shorif-uddin.vercel.app`

## Contact form
Submissions open the visitor's email app addressed to mcshorif@gmail.com.
(Static sites can't send mail by themselves — this needs no signup or backend.)

## Blog images
Use the prompts in IMAGE-PROMPTS.md to generate images in Gemini,
save them as `public/blog/<filename>.jpg`, and send them back — I will wire them in.

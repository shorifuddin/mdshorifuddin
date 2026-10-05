# Next.js portfolio recreation

This is a clean-room recreation of the public-facing Bostami portfolio demo layout. It includes the five public routes, shared profile/sidebar, responsive navigation, pastel background, cards, page transitions, sticky desktop profile/navigation, scrolling behavior, and light/dark theme toggle.

## Routes
- `/home-1`
- `/resume`
- `/portfolio`
- `/blog`
- `/contact`

## Run
```bash
npm install
npm run dev
```
Then open `http://localhost:3000/home-1`.

The implementation is original and does not include the commercial template's proprietary source code or preview assets. Replace the placeholder profile/photo/contact information with your own.

## Customising
- Edit your name, role, contact info and footer text in the `profile` object at the top of `app/site.js`.
- Drop your photo at `public/profile.jpg` (it falls back to initials if the file is missing).
- Portfolio / blog thumbnails use coloured placeholders; add `src: '/works/x.png'` (portfolio) or `src: '/blog/x.jpg'` (blog) to an item to use a real image.

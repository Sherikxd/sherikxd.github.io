# andrei sherikhov — portfolio

minimalist **black & white** single-page portfolio + blog.
built with **[react bits](https://reactbits.dev)** components copy-pasted into a
**[docusaurus](https://docusaurus.io)** site, so the blog comes for free.

> english, informal, on purpose.

## run it

```bash
npm install
npm start          # dev server → http://localhost:3000
npm run build      # static site → build/
npm run serve      # serve the production build
npm run typecheck  # tsc
```

## what's on the page

| section | what it says |
| --- | --- |
| hero | name, `@sherikxd`, "coding since i was 7", animated stats |
| about | 18, from colombia, maintaining AyudaEnCali + Áureo, open to new projects |
| work | the 3 newest repos: **AyudaEnCali**, **NatureIntelligence** (fire detection), **Áureo** |
| wins | **2nd place** · EAG Global Buildathon · cali · 20 sep 2026 · 200 USDT |
| toolbox | languages / frontend / backend / ai & web3 / infra |
| blog | 3 latest posts, then the full docusaurus blog |
| contact | email + github + linkedin + dev.to |

## react bits components used

copy-pasted from [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits)
into `src/components/reactbits/`:

- **BlurText** — hero paragraph word-by-word reveal
- **DecryptedText** — the `@sherikxd` scramble on hover
- **CountUp** — the animated stats
- **DotField** — the hero dot background (reacts to the cursor)
- **SpotlightCard** — project cards
- **StarBorder** — primary button
- **ShinyText** — the one-liner in the about section

they ship as plain `.jsx`; `src/components/reactbits/index.ts` adds the prop
types so `npm run typecheck` stays green. the only extra dependency is `motion`.

## black & white, for real

`src/css/custom.css` forces every docusaurus variable onto a grayscale ramp
(primary, status colors, gray scale, admonitions, code blocks, prism themes) —
so the whole site is pure `#000` / `#fff` in light mode and its mirror in dark
mode. a build check confirms there is not a single non-gray color left in the
winning css rules.

## structure

```
docusaurus.config.ts      site config, navbar, footer, monochrome prism themes
src/pages/index.tsx       the whole landing page
src/pages/index.module.css
src/css/custom.css        the black & white theme
src/components/reactbits/ react bits sources + types
blog/                     5 posts (frontmatter: title, authors, tags)
static/img/               avatar, favicon, social card (all svg, all b/w)
```

## editing the blog

the homepage shows the 3 latest posts. they are listed in `POSTS` inside
`src/pages/index.tsx` — when you publish a new post, update that array (title,
date and href, urls include the date: `/blog/2026/10/01/my-post`).

## deploy

- `npm run build` → static files in `build/`
- github pages: set `url` / `baseUrl` in `docusaurus.config.ts`
  (`baseUrl: '/portafoli/'` if the repo is not `username.github.io`),
  then `npm run deploy`
- or drop `build/` on netlify / vercel / any static host

## sources

- github: [github.com/Sherikxd](https://github.com/Sherikxd)
- linkedin: [andrei-sherikhov-3a06582a7](https://www.linkedin.com/in/andrei-sherikhov-3a06582a7/)
- hackathon result: [ethcali.org/builders-tour/winners](https://www.ethcali.org/builders-tour/winners)

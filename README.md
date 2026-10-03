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
docusaurus.config.ts      site config, navbar, footer, seo head tags, json-ld
src/pages/index.tsx       the whole landing page
src/pages/index.module.css
src/css/custom.css        the black & white theme
src/components/reactbits/ react bits sources + types
src/theme/BlogPostItem/   wraps the theme → adds BlogPosting json-ld per post
scripts/llms-full.mjs     builds build/llms-full.txt after every build
blog/                     5 posts (frontmatter: title, authors, tags, keywords)
static/img/               avatar, favicon, social card (svg + 1200×630 png)
static/robots.txt         robots + ai crawlers + sitemap pointer
static/llms.txt           plain-text summary for ai assistants
```

## editing the blog

the homepage shows the 3 latest posts. they are listed in `POSTS` inside
`src/pages/index.tsx` — when you publish a new post, update that array (title,
date and href, urls include the date: `/blog/2026/10/01/my-post`).

every post should set `title`, `description`, `tags` and `keywords` in the
frontmatter — they become the meta description and the `BlogPosting` json-ld.

## seo & ai visibility

the site is set up to be findable by google **and** by chat assistants:

| what | where |
| --- | --- |
| canonical urls matching github pages (`trailingSlash: true`) | `docusaurus.config.ts` |
| titles + meta descriptions | `Layout` props in `src/pages/index.tsx`, `blogDescription` in config |
| `Person` + `WebSite` + `ProfilePage` json-ld on every page | `headTags` in `docusaurus.config.ts` |
| `BlogPosting` json-ld on every post | `src/theme/BlogPostItem/index.tsx` |
| 1200×630 png social card (svg is ignored by most crawlers) | `static/img/social-card.png` |
| robots.txt allowing gptbot, claudebot, perplexitybot… + sitemap | `static/robots.txt` |
| `llms.txt` and full-text `llms-full.txt` | `static/llms.txt` + `scripts/llms-full.mjs` (postbuild) |
| sitemap.xml, rss + atom | docusaurus defaults |
| IndexNow ping after every deploy (bing, duckduckgo, yandex…) | `.github/workflows/deploy.yml` |

still manual: add the site to [google search console](https://search.google.com/search-console)
and submit the sitemap once.

## deploy

- **automatic:** `.github/workflows/deploy.yml` builds and publishes on every
  push to `main` → [sherikxd.github.io](https://sherikxd.github.io)
  (repo settings → Pages → source: **GitHub Actions**)
- local: `npm run build` → static files in `build/`, `npm run serve` to check
- `url` / `baseUrl` live in `docusaurus.config.ts`
  (`baseUrl: '/portafoli/'` if the repo is not `username.github.io`)
- or drop `build/` on netlify / vercel / any static host

## sources

- github: [github.com/Sherikxd](https://github.com/Sherikxd)
- linkedin: [andrei-sherikhov-3a06582a7](https://www.linkedin.com/in/andrei-sherikhov-3a06582a7/)
- hackathon result: [ethcali.org/builders-tour/winners](https://www.ethcali.org/builders-tour/winners)

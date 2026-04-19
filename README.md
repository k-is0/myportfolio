# kevin.portfolio

Personal portfolio — Swiss / editorial, pure white, Helvetica, single orange accent.

Built with Next.js 16 (App Router, Turbopack), React 19, Tailwind v4, TypeScript 5, and `motion` for animation. Smooth scroll via Lenis, morph transitions via React's `<ViewTransition>`.

## Stack

- **Framework** — Next.js 16.2 (App Router, React 19, promise-based route params, `experimental.viewTransition`)
- **Styling** — Tailwind v4 with `@theme` CSS-based tokens (see [app/globals.css](app/globals.css))
- **Motion** — `motion` 12 (Framer Motion's new name); `<MotionConfig reducedMotion="user">` wraps the tree
- **Smooth scroll** — Lenis 1.3, disabled on coarse pointers and reduced-motion users
- **Type** — system Helvetica Neue stack (no web fonts → zero FOUT, smaller payload)

## Routes

| Path            | Purpose                                           |
| --------------- | ------------------------------------------------- |
| `/`             | Hero — name, positioning line, link to work       |
| `/work`         | Featured project grid (12-col, variable spans)    |
| `/work/[slug]`  | Project detail with View Transitions morph cover  |
| `/about`        | Long-form bio, now/education/performance/tools    |
| `/archive`      | Flat typographic list of every project, by year   |
| `/contact`      | Email (click-to-copy), links, location            |

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build       # production build
pnpm start       # serve production build
pnpm lint        # eslint
pnpm exec tsc --noEmit   # type-check
```

## Content

All content lives under [content/](content/):

- [content/profile.ts](content/profile.ts) — name, role, email, social links, signoff
- [content/projects.ts](content/projects.ts) — project list with body blocks, categories, adjacent-project helper
- [content/about.ts](content/about.ts) — about copy, education, performances, tools, photos

### Adding the about photos

Two photos render on `/about`. Drop files at:

- `public/images/kevin-portrait.jpg` — 4:5 portrait (≥1200×1500), aside column top-right
- `public/images/kevin-piano.jpg` — 3:2 candid (≥1800×1200), inline between body paragraphs

Then update the two `src` fields in [content/about.ts](content/about.ts) from `.svg` to `.jpg`. The SVG placeholders in `public/images/` are temporary stand-ins.

## Deploy on Vercel

One-click with the Vercel dashboard — no configuration needed.

```bash
pnpm dlx vercel          # first-time link
pnpm dlx vercel --prod   # deploy
```

Or push to GitHub and import at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js 16, builds with Turbopack, and deploys the static output. Environment variables: none required.

### Custom domain

1. Add the domain under Project → Settings → Domains.
2. Update [app/layout.tsx](app/layout.tsx) — change `metadataBase` from `https://kevin.example` to the production URL so OpenGraph and canonical URLs resolve correctly.

## Performance

Lighthouse targets (mobile, simulated throttled 4G):

| Page      | Perf | A11y | BP  | SEO | LCP    | CLS |
| --------- | ---- | ---- | --- | --- | ------ | --- |
| `/`       |  98  | 100  | 100 | 100 | 2.3 s  | 0   |
| `/work`   |  97  | 100  | 100 | 100 | 2.6 s  | 0   |
| `/about`  |  95  | 100  | 100 | 100 | 3.0 s  | 0   |
| `/contact`|  98  | 100  | 100 | 100 | 2.3 s  | 0   |
| `/archive`|  98  | 100  | 100 | 100 | 2.3 s  | 0   |

Real-world LCP on Vercel's edge is well below these simulated values. Swap the SVG placeholders for compressed AVIF/WebP portraits to tighten `/about` further.

## Architecture notes

- **Reduced motion** — `<MotionConfig reducedMotion="user">` in [components/MotionProvider.tsx](components/MotionProvider.tsx) short-circuits transform/scale/clip-path animations when the OS preference is set; the CSS block in [app/globals.css](app/globals.css) catches remaining CSS transitions; Lenis and the custom cursor opt out at mount.
- **View Transitions** — Cover images morph between `/work` and `/work/[slug]` via React 19's `<ViewTransition name share="morph">` pattern ([components/ProjectCard.tsx](components/ProjectCard.tsx), [app/work/[slug]/page.tsx](app/work/[slug]/page.tsx)). Keyframes live in [app/globals.css](app/globals.css).
- **Type scale** — One source of truth in `@theme`: display / h1 / h2 / h3 / body / body-sm / meta. Everything on the page pulls from these tokens.
- **Placeholder covers** — Six hand-drawn SVG patterns ([components/ProjectPlaceholder.tsx](components/ProjectPlaceholder.tsx)) stand in until real project photography is added; swap a project's `cover.kind` from `placeholder` to `image` in [content/projects.ts](content/projects.ts).

## License

MIT — see [LICENSE](LICENSE).

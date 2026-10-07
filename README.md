# andrewjeanette.com

My personal site and e-portfolio, live at **[andrewjeanette.com](https://andrewjeanette.com)**.

![andrewjeanette.com landing page](docs/home.png)

## What's here

| Path | What it is | Source |
|---|---|---|
| `/` | Landing page | `home/` (static HTML + Tailwind) |
| `/portfolio/` | E-portfolio covering education, experience and projects, with light/dark themes | React app (`App.tsx`, `components/`) |
| `/portfolio/weatherapp/` | Real-time weather app | `weatherapp/` |
| `/canon/privacy-policy/` | Privacy policy for my Canon mobile app | `canon/` |

The portfolio also includes **Quiz Bowl** (`components/tools/QuizBowl.tsx`), an interactive study
tool.

## Stack

React 19, TypeScript, Vite, Tailwind CSS and lucide-react, deployed as static assets on
Cloudflare (`wrangler.jsonc`).

A small Vite plugin in `vite.config.ts` copies the standalone pages (`home/`, `weatherapp/`,
`canon/`) into `dist/` next to the React build, so one deploy serves the whole site.

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000/portfolio/
npm run build     # builds the landing-page CSS and the React app into dist/
npx wrangler deploy
```

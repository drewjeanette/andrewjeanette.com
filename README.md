# andrewjeanette.com

My personal site and e-portfolio, live at **[andrewjeanette.com](https://andrewjeanette.com)**.

![andrewjeanette.com landing page](docs/home.png)

## What's here

| Path | What it is | Source |
|---|---|---|
| `/` | Landing page | `home/` (static HTML + Tailwind) |
| `/portfolio/` | E-portfolio covering education, experience and projects, with light/dark themes | React app (`App.tsx`, `components/`) |
| `/portfolio/weatherapp/` | Real-time weather app | `weatherapp/` |
| `/drive/` | Drive Sim, a driving simulator for learner drivers ([source](https://github.com/drewjeanette/driving-simulation)) | `drive/` (built output, published from the simulator repo) |
| `/canon/privacy-policy/` | Privacy policy for my Canon mobile app | `canon/` |

The portfolio also includes **Quiz Bowl** (`components/tools/QuizBowl.tsx`), an interactive study
tool.

## Stack

React 19, TypeScript, Vite, Tailwind CSS and lucide-react, deployed as static assets on
Cloudflare (`wrangler.jsonc`).

A small Vite plugin in `vite.config.ts` copies the standalone pages (`home/`, `weatherapp/`,
`canon/`, `drive/`) into `dist/` next to the React build, so one deploy serves the whole site.

### Drive Sim

`drive/` is the production build of [driving-simulation](https://github.com/drewjeanette/driving-simulation).
To update it, run `npm run publish:site` in that repo (with this repo checked out next to it), then commit here.

For Google Maps and Street View, set `DRIVE_GOOGLE_MAPS_API_KEY` in the build environment (Cloudflare build
variables, or your shell before `npm run build`). The build writes it to `dist/drive/config.json`, so it is never
committed. Restrict the key to `https://andrewjeanette.com/*` and the APIs listed in the simulator's README.
Without the variable the simulator runs in its keyless OpenStreetMap mode.

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000/portfolio/
npm run build     # builds the landing-page CSS and the React app into dist/
npx wrangler deploy
```

# andrewjeanette.com

My personal site and e-portfolio, live at **[andrewjeanette.com](https://andrewjeanette.com)**.

![andrewjeanette.com landing page](docs/home.png)

## What's here

| Path | What it is | Source |
|---|---|---|
| `/` | Landing page | `home/` (static HTML + Tailwind) |
| `/portfolio/` | E-portfolio covering education, experience and projects, with light/dark themes | React app (`App.tsx`, `components/`) |
| `/portfolio/weatherapp/` | Real-time weather app | `weatherapp/` |
| `/portfolio/driving-simulator/` | Drive Sim, a driving simulator for learner drivers ([source](https://github.com/drewjeanette/driving-simulation)) | `driving-simulator/` (built output, published from the simulator repo) |
| `/canon/privacy-policy/` | Privacy policy for my Canon mobile app | `canon/` |

The portfolio also includes **Quiz Bowl** (`components/tools/QuizBowl.tsx`), an interactive study
tool.

## Stack

React 19, TypeScript, Vite, Tailwind CSS and lucide-react, deployed as static assets on
Cloudflare (`wrangler.jsonc`).

A small Vite plugin in `vite.config.ts` copies the standalone pages (`home/`, `weatherapp/`,
`canon/`, `driving-simulator/`) into `dist/` next to the React build, so one deploy serves the whole site.

### Drive Sim

`driving-simulator/` is the production build of [driving-simulation](https://github.com/drewjeanette/driving-simulation).
To update it, run `npm run publish:site` in that repo (with this repo checked out next to it), then commit here.

Credentials are set in the build environment (Cloudflare build variables, or your shell before
`npm run build`) and written to `dist/portfolio/driving-simulator/config.json`, so they are never committed:

- `DRIVE_MAPILLARY_TOKEN`: free Mapillary client token (`MLY|...`) for 360° street photos.
- `DRIVE_GOOGLE_MAPS_API_KEY` (optional): switches the simulator to Google Street View. Restrict it to
  `https://andrewjeanette.com/*` and the APIs listed in the simulator's README.

With neither set, the simulator drives a generated road on OpenStreetMap data.

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000/portfolio/
npm run build     # builds the landing-page CSS and the React app into dist/
npx wrangler deploy
```

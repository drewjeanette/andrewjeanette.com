import fs from 'fs';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Copies standalone static pages into the build output after the React app is
// built, so they sit alongside it:
//   - home/         -> dist/             (root "/" landing page)
//   - weatherapp/   -> dist/portfolio/weatherapp/  ("/portfolio/weatherapp/")
//   - canon/        -> dist/canon/                 ("/canon/...")
//   - driving-simulator/ -> dist/portfolio/driving-simulator/  (Drive Sim build)
//
// Drive Sim is built in its own repo (github.com/drewjeanette/driving-simulation)
// and copied here with `npm run publish:site`. Its Google Maps key is never
// committed: set DRIVE_GOOGLE_MAPS_API_KEY in the build environment and this
// plugin writes it to dist/portfolio/driving-simulator/config.json. Without it the simulator runs in
// its keyless OpenStreetMap mode.
function copyStaticPages(): Plugin {
  const copies = [
    { from: 'home', to: 'dist' },
    { from: 'weatherapp', to: 'dist/portfolio/weatherapp' },
    { from: 'canon', to: 'dist/canon' },
    { from: 'driving-simulator', to: 'dist/portfolio/driving-simulator' },
  ];
  return {
    name: 'copy-static-pages',
    closeBundle() {
      for (const { from, to } of copies) {
        fs.cpSync(
          path.resolve(__dirname, from),
          path.resolve(__dirname, to),
          { recursive: true }
        );
      }
      const configPath = path.resolve(__dirname, 'dist/portfolio/driving-simulator/config.json');
      fs.rmSync(configPath, { force: true }); // never ship a stale key from an earlier build
      const key = process.env.DRIVE_GOOGLE_MAPS_API_KEY?.trim();
      if (key) {
        if (!/^AIza[0-9A-Za-z_-]{35}$/.test(key)) {
          throw new Error('DRIVE_GOOGLE_MAPS_API_KEY does not look like a Google Maps API key.');
        }
        fs.writeFileSync(configPath, JSON.stringify({ googleMapsApiKey: key }));
      }
    }
  };
}

export default defineConfig(() => {
    return {
      // App is served from yourdomain.com/portfolio/ on Cloudflare Pages.
      // This prefixes every built asset URL with /portfolio/.
      base: '/portfolio/',
      build: {
        // Emit into dist/portfolio so the deployed path matches the base.
        // Point Cloudflare Pages' "output directory" at `dist`.
        outDir: 'dist/portfolio',
        emptyOutDir: true,
      },
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), copyStaticPages()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

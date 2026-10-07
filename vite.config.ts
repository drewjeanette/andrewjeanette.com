import fs from 'fs';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Copies standalone static pages into the build output after the React app is
// built, so they sit alongside it:
//   - home/         -> dist/             (root "/" landing page)
//   - weatherapp/   -> dist/portfolio/weatherapp/  ("/portfolio/weatherapp/")
//   - canon/        -> dist/canon/                 ("/canon/...")
function copyStaticPages(): Plugin {
  const copies = [
    { from: 'home', to: 'dist' },
    { from: 'weatherapp', to: 'dist/portfolio/weatherapp' },
    { from: 'canon', to: 'dist/canon' },
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

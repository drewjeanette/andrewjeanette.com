import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Copies the static landing page (home/index.html) to dist/index.html after
// the app build, so the root path "/" serves the home page while the React
// app lives under "/portfolio/".
function copyHomePage(): Plugin {
  return {
    name: 'copy-home-page',
    closeBundle() {
      const src = path.resolve(__dirname, 'home/index.html');
      const dest = path.resolve(__dirname, 'dist/index.html');
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
    }
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
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
      plugins: [react(), copyHomePage()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

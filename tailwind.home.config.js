/** @type {import('tailwindcss').Config} */
// Dedicated config for the standalone landing page (home/index.html), compiled
// to a static stylesheet so its dark-mode toggle is instant (no runtime CDN).
export default {
  darkMode: 'class',
  content: ['./home/index.html'],
  theme: { extend: {} },
  plugins: [],
};

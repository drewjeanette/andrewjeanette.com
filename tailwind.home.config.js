/** @type {import('tailwindcss').Config} */
// Dedicated config for the standalone landing page (home/index.html), compiled
// to a static stylesheet so its dark-mode toggle is instant (no runtime CDN).
// Shares the portfolio's color tokens and fonts (defined in home/home.src.css).
import portfolio from './tailwind.config.js';

export default {
  darkMode: 'class',
  content: ['./home/index.html', './canon/**/*.html'],
  theme: {
    extend: {
      colors: portfolio.theme.extend.colors,
      fontFamily: portfolio.theme.extend.fontFamily,
      letterSpacing: portfolio.theme.extend.letterSpacing,
    },
  },
  plugins: [],
};

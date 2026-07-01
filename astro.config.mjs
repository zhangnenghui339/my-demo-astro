// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Allow CI to override site/base for GitHub Pages project-page previews
// (e.g. https://<user>.github.io/<repo>/) without touching the production
// careerradar.io configuration used for local/production builds.
const site = process.env.SITE_URL || 'https://careerradar.io';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

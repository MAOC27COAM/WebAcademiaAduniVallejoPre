// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://wondrous-beignet-6e3d99.netlify.app', // Tu URL de Netlify o dominio propio
  integrations: [sitemap()],
});


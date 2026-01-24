
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wondrous-beignet-6e3d99.netlify.app/', // Tu URL de Netlify o dominio propio
  integrations: [sitemap()],
});
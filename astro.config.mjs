import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://leonidmegabatman-glitch.github.io',
  base: '/site',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: { prefixDefaultLocale: true, fallbackType: 'redirect' },
  },
  integrations: [react(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
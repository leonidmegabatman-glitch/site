import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://leonidmegabatman-glitch.github.io',
  base: '/site',
  trailingSlash: 'always',
  // Блок i18n намеренно не включён: языковые префиксы строит сам роут
  // src/pages/[locale]/[...slug].astro через href() из src/lib/url.ts.
  // Автоматический слой маршрутизации мешал (сборка выдавала /ru/ru/ и
  // /ru/en/ вместо /ru/ и /en/), а routing: 'manual' требует middleware,
  // которого у нас нет.
  integrations: [react(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
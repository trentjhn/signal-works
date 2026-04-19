import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://signalworks.live',
  build: {
    // Inline the main Tailwind bundle into the HTML head instead of serving it
    // as a separate render-blocking <link>. The bundle is ~5 KB so this is a
    // net win: one fewer round trip, no render-blocker, and it still gzips
    // well inside the HTML payload.
    inlineStylesheets: 'always',
  },
});

// @ts-check
import { defineConfig, envField } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://soycontador.ai',
  output: 'static',
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/gracias') && !page.includes('/dentro'),
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  redirects: {
    '/jueves-de-contadoria': '/jueves',
    '/talleres': '/capacitacion',
  },
  env: {
    schema: {
      SENDY_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      SENDY_ACTION_URL: envField.string({ context: 'server', access: 'public', optional: true }),
      SENDY_LIST_ID: envField.string({ context: 'server', access: 'public', optional: true }),
      // Lista propia del ebook. Si falta, el alta cae en SENDY_LIST_ID.
      SENDY_EBOOK_LIST_ID: envField.string({ context: 'server', access: 'public', optional: true }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

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
      // Una lista por promesa, porque el autoresponder se cuelga de la lista.
      // Si alguna falta, el alta cae en SENDY_LIST_ID.
      SENDY_EBOOK_LIST_ID: envField.string({ context: 'server', access: 'public', optional: true }),
      SENDY_LIVE_LIST_ID: envField.string({ context: 'server', access: 'public', optional: true }),

      // Correo de acuse del lead (SES). El dominio ya está verificado con
      // SPF/DKIM, así que el remitente debe ser @soycontador.ai.
      SES_REGION: envField.string({ context: 'server', access: 'public', optional: true }),
      SES_ACCESS_KEY_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
      SES_SECRET_ACCESS_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CORREO_REMITENTE: envField.string({ context: 'server', access: 'public', optional: true }),
      CORREO_COPIA: envField.string({ context: 'server', access: 'public', optional: true }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

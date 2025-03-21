// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
      optimizeDeps: {
        exclude: ["/home/tomas/blog-astro/node_modules/.vite/deps/chunk-IKH3W5T5.js?v=1eb81e0c"]
      } 
  },

  integrations: [sanity({
    projectId: '0le9gy6h',
    dataset: 'production',
    studioBasePath: '/admin',
  }), react()]
});
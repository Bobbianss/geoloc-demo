// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  base:'/',
  build: {
    base:'/geoloc-demo/',
    rollupOptions:{
      external: ['public/*'], // specifica il file da escludere dalla build
    },
  },
});
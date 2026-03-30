/**
 * Vite Configuration — Portafolio Manuel Amado
 * 
 * Vanilla HTML/CSS/JS project with Vite as dev server and build tool.
 * Public assets (images, robots.txt, sitemap) are served from /public.
 */
import { defineConfig } from 'vite';

export default defineConfig({
  /* Root directory for HTML entry */
  root: '.',

  /* Static assets directory */
  publicDir: 'public',

  /* Build output configuration */
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    cssMinify: true,
  },

  /* Dev server settings */
  server: {
    port: 3000,
    open: true,
  },
});

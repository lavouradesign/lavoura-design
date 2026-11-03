import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel(),
  // mantém o resto da tua config (integrações, site, etc.)
});
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rbwondimu.github.io',
  base: (process.env.CI || process.env.GITHUB_ACTIONS) ? '/Photography-2026' : '/',
});

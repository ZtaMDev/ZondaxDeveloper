import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: true,
  })],
  site: 'https://ztamdev.github.io',
  outDir: './docs',
});

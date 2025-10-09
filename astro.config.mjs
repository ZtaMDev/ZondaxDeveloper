import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: true })],
  site: 'https://ZtaMDev.github.io',
  base: '/',          // opcional, por claridad
  outDir: './docs',   // correcto para Pages desde /docs
});
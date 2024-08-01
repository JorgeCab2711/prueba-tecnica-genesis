import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://JorgeCab2711.github.io',
  base: 'prueba-tecnica-genesis',
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), icon()]
});
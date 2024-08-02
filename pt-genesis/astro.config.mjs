import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://JorgeCab2711.github.io/prueba-tecnica-genesis',
  base: '/prueba-tecnica-genesis/',
  output: 'static',
  build: {
    outDir: 'dist',
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), icon()]
});

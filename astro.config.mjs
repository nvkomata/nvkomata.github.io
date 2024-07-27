import { defineConfig } from "astro/config";

import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nvkomata.github.io",
  integrations: [icon(), sitemap()],
  markdown: {
    gfm: true,
    shikiConfig: {
      // https://shiki.style/themes
      theme: "rose-pine",
      // https://shiki.style/guide/dual-themes#without-default-color
      defaultColor: false,
      // https://shiki.style/languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: false,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
});

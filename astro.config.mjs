import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://nvkomata.github.io",
  base: "/",
  outDir: "public",
  publicDir: "static",
  integrations: [icon()],
});

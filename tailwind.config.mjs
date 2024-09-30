/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        eternalskies: "url('/backgrounds/eternalskies.avif')",
        tokyo: "url('/backgrounds/tokyo.avif')",
        field: "url('/backgrounds/field.avif')",
        demons: "url('/backgrounds/demons.avif')",
      },
    },
    fontFamily: {
      sans: ["sans-serif", "system-ui"],
      serif: ["Forum", "ui-serif", "serif"],
      mono: ["ui-monospace", "SFMono-Regular", "monospace"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            backgroundImage: {
                eternalskies: "url('/eternalskies.jpg')",
                zero: "url('/layer0.jpg')",
            },
        },
        fontFamily: {
            'sans': ['Helvetica', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            'serif': ['ui-serif', 'serif'],
            'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
            'monoer': ['"Iosevka Curly Slab"', 'ui-monospace'],
            'lora': ['Lora', 'serif'],
        }
    },
    plugins: [],
};
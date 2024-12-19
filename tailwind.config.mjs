/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      width: {
        fill: "-webkit-fill-available",
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};

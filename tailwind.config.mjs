/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      blue: {
        50: "#EFF0F6",
        100: "#DEE1ED",
        200: "#BDC4DB",
        300: "#A0A9CB",
        400: "#7F8BB8",
        500: "#5E6DA6",
        600: "#4A5787",
        700: "#384266",
        800: "#272E47",
        900: "#141724",
        950: "#090B10",
      },
      brown: {
        50: "#FAF8F5",
        100: "#F7F3EE",
        200: "#EEE8DD",
        300: "#E6DCCC",
        400: "#DDD0BB",
        500: "#D4C3A8",
        600: "#BBA177",
        700: "#9A7C4C",
        800: "#665333",
        900: "#332919",
        950: "#18130C",
      },
    },
  },
  plugins: [],
};

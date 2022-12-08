/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  tailwindConfig: "./tailwind.config.js",
  theme: {
    extend: {},
    colors: {
      blue: {
        DEFAULT: "#2860BB",
        dark: "#022898",
        light: "#6B92C1",
        lightest: "#9BBDE4",
      },
      black: {
        DEFAULT: "#636363",
        dark: "#070707",
        light: "#9E9E9E",
        lightest: "#E1E1E1",
      },
  },
  fontFamily: {
    inter: ["Inter", "sans-serif"],
  },
  plugins: [],
};

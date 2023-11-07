const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f0ff",
          100: "#e9e4ff",
          200: "#d6ccff",
          300: "#b8a4ff",
          400: "#9770ff",
          500: "#7937ff",
          600: "#6c0fff",
          700: "#5f00ff",
          800: "#4f00da",
          900: "#390099",
          950: "#26007a",
        },
        secondary: {
          50: "#fffeea",
          100: "#fffbc5",
          200: "#fff785",
          300: "#ffec46",
          400: "#ffdd1b",
          500: "#ffbd00",
          600: "#e29200",
          700: "#bb6702",
          800: "#984f08",
          900: "#7c410b",
          950: "#482100",
        },
        accent: {
          50: "#ffeff2",
          100: "#ffe0e6",
          200: "#ffc6d4",
          300: "#ff97b0",
          400: "#ff5d88",
          500: "#ff2464",
          600: "#ff0054",
          700: "#d70047",
          800: "#b40044",
          900: "#990241",
          950: "#57001e",
        },
      },
      fontFamily: {
        display: "var(--font-big-shoulders-display)",
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

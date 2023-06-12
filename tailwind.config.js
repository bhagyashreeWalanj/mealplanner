/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        breakfast: "#a3b84d",
        lunch: "#d27455",
        dinner: "#8879B0",
      },
    },
  },
  plugins: [],
};

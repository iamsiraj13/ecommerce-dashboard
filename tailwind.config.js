/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        sky: "#F5F3C1",
        black: "#2C3333",
        "black-l": "#06283D",
        "sky-blue": "#B6EAFA",
      },
    },
  },
  plugins: [],
};

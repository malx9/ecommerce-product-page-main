/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      orange: "#ff7d1a",
      "pale-orange": "hsl(25, 100%, 94%)",
    },
    extend: {},
  },
  plugins: [],
};

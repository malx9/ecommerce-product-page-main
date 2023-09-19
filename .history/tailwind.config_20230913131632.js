/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        orangosjebanos: "#ff7d1a",
        lightorangos: "hsl(25, 100%, 94%)",
        vdarkblue: "hsl(220, 13%, 13%)",
        darkgrayishblue: "hsl(219, 9%, 45%)",
        grayishblue: "hsl(220, 14%, 75%)",
        lightgrayishblue: "hsl(223, 64%, 98%)",
        customblack: "hsl(0, 0%, 0%)",
      },
      height: {
        "1vw": "1vw",
        "2vw": "2vw",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
  plugins: [],
};

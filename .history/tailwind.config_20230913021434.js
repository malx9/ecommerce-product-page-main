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
    },
  },
  plugins: [],
};

// colors: {
//   transparent: "transparent",
//   current: "currentColor",
//   orangosjebanos: "#ff7d1a",
//   vdarkblue: "hsl(220, 13%, 13%)",
//   darkgrayishblue: "hsl(219, 9%, 45%)",
//   grayishblue: "hsl(220, 14%, 75%)",
//   lightgrayishblue: "hsl(223, 64%, 98%)",
//   customblack: "hsl(0, 0%, 0%)",
// },

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
        bordergray: "rgba(206, 196, 196, 0.507)",
      },

      screens: {
        md: "1125px",
        // => @media (min-width: 960px) { ... }

        lg: "1080px",
        // => @media (min-width: 1440px) { ... }

        mmd: { max: "1125px" },
      },
    },
  },
  plugins: [],
};

const { readBuilderProgram } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        25: "100px",
        125: "500px",
        270: "1080px",
      },
      colors: {
        primary: {
          DEFAULT: "#217AFF",
        },
        cgray: {
          500: "#555555",
          600: "#666666",
          700: "#777777",
        },
        lightBlue: "rgba(33, 122, 255, 0.6)",
        background: "#F5FDFF",
      },
      backgroundImage: {
        divider:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 51.04%, rgba(0, 0, 0, 0) 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

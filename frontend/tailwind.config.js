/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    color: {
      primaryOrange: "#F09564",
      primaryBlue: "#5C64CF",
      primaryBlack: "#272726",
      primaryWhite: "#F5F4F2",
    },
    fontFamily: {
      sans: ["Lexend Deca", "sans-serif"],
      serif: ["Red Hat Display", "serif"],
    },
  },
  plugins: [],
};

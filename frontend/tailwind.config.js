/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        taupe: "#988780",
        white: "#ffffff",
        teal: "#13292A",
        cream: "#e7ded9",
        "dark-blue": "#1616FF",
        black: "#1D1D1D",
        amber: "#ffb703",
        gray: "#808080",
      },
      minHeight: {
        inherit: "inherit",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};

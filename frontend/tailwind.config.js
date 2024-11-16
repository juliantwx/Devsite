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
      },
      minHeight: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};

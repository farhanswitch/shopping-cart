/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        linearP: {
          "0%": { opacity: "0", transform: "scaleX(0.01)" },
          "99%": { opacity: "1", transform: "scaleX(0.99)" },
        },
      },
      animation: {
        "linear-progress": "linearP .7s ease-in-out infinite",
      },
      fontFamily: {
        inter: "inter",
      },
    },
  },
  plugins: [],
};

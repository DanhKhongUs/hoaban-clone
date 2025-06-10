const { animateFill } = require("tippy.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "856px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        ct: "1150px",
      },
      animation: {
        spinner: "spinner 0.6s linear infinite",
      },
      keyframes: {
        spinner: {
          from: {
            transform: "translateY(-50%) rotate(0)",
          },
          to: {
            transform: "translateY(-50%) rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};

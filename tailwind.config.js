/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        toastIn: {
          "0%":   { opacity: "0", transform: "translateX(-50%) translateY(10px)" },
          "15%":  { opacity: "1", transform: "translateX(-50%) translateY(0)" },
          "80%":  { opacity: "1", transform: "translateX(-50%) translateY(0)" },
          "100%": { opacity: "0", transform: "translateX(-50%) translateY(8px)" },
        },
      },
      animation: {
        fadeIn:  "fadeIn 0.2s ease forwards",
        slideUp: "slideUp 0.25s ease forwards",
        toastIn: "toastIn 2.2s ease forwards",
      },
    },
  },
  plugins: [],
};
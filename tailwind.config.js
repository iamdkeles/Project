/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        laptop: "1024px",
      },
      fontFamily: {
        sans: ["Heebo", "sans-serif"],
      },
      boxShadow: {
        "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.3)",
        "text-shadow-lg": "4px 4px 8px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
        },
      });
    },
  ],
};

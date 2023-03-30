/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        bgColor: "#0F172A",
        darkerBgColor: "#000116",
        textBlue: "#3B82F8",
        primaryText: "#94A3B8",
        darkBlue: "#3366CC",
        whitishGray: "#E2E2E2",
        whiteShade: "#C6C6C6",
        lightBgColor: "#3B4157",
      },
      fontFamily: {
        sans: ["Nunito", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "5xl": "3.5rem",
      },
      lineHeight: {
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.5rem",
        10: "2.75rem",
      },
    },
  },
  plugins: [],
};

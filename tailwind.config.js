/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Chakra-Petch": ['"Chakra Petch"', "sans-serif"],
        "Montserrat-Alternates": ["Montserrat Alternates", "sans-serif"],
        "Orbitron": ["Orbitron", "sans-serif"],
        "permanent-marker": ["permanent-marker", "sans-serif"],
      },
      // fontSize: {
      //   xs: "0.75rem",
      //   sm: "0.875rem",
      //   base: "1rem",
      //   lg: "1.125rem",
      //   xl: "1.25rem",
      //   "2xl": "1.5rem",
      //   "3xl": "1.875rem",
      //   "4xl": "2.25rem",
      //   "5xl": "3rem",
      //   "6xl": "4rem",
      // },
    },
  },
  plugins: [],
};

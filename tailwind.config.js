/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D0100",
        secondary: "#FFCA72",
        yellow: {
          DEFAULT: '#FFCA72', // Override the default yellow
        },
      },
      fontFamily: {
        califone: ['BNCalifone', 'sans-serif'], // Add BNCalifone
        sans: ['Montserrat', 'sans-serif'], // Add Montserrat
      },
    },
  },
  plugins: [],
};
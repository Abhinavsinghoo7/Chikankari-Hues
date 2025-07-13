/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chikankari-red': '#9E1B32',  // Brand color matching chikankarihues.com
        'chikankari-gold': '#D4AF37', // Common accent color
      },
    },
  },
  plugins: [],
}

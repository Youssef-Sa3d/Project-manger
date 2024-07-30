/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#325288',
        offWhite: '#F4EEE8',
        rose: '#F5CEBE',
        darkBlue: '#114E60'
      },
    },
  },
  plugins: [],
}


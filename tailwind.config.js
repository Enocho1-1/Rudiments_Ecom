/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'blk': '#0d0d0d',
      },
      fontFamily: {
        Bebas: ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


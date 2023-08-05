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
      },
      screens: {
         /* Media Query for Mobile Devices */
        'mobile': '480px',
        /* Media Query for Tablets Ipads portrait mode */
        'tablet': '769px'
      },
      gridTemplateColumns: {
        // Simple 2 column grid
        'two': 'repeat(2,1fr)'
      },
      gridTemplateRows: {
        // Simple 3 row grid
        'three': 'repeat(3, 100px)',

      }
    },
  },
  plugins: [],
}


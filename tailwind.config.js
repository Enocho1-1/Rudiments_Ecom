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
    },
  },
  plugins: [],
}


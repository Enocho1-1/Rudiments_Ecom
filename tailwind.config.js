/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'blk': '#0d0d0d',
      },
      fontFamily: {
        Bebas: ['Bebas Neue', 'sans-serif'],
        Inconsolata: ['Inconsolata', 'monospace']
      },
      screens: {
         /* Media Query for Mobile Devices */
        'mobile': '480px',
        /* Media Query for Tablets Ipads portrait mode */
        'tablet': '769px',
        /* Media Query for small Laptops*/
        'laptop':'1024px',
        /* Media Query for Large Laptop and Desktops */
        "desktop": "1350px",
      },
      gridTemplateColumns: {
        // Simple 2 column grid
        'gridCols': 'repeat(2, minmax(0, 500px))',
      },
      gridTemplateRows: {
        'gridRows': 'repeat(2, minmax(0, 1fr))',
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}


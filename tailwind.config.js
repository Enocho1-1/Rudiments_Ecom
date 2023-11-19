/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'blk': '#0d0d0d',
        'ecru':'#F3EFE0' ,
        'khaki':'#F0E68C',
        'beige':'#FFD740',
        'stone':'#B7B09C'
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
        /* Media Query for 4K UHD Monitors */
        "Lrgmoniter": "1536px"
      },
      gridTemplateColumns: {
        // Simple 2 column grid
        'gridCols': 'repeat(2, minmax(0, 500px))',
        'gridResponsive': 'repeat(auto-fill, minmax(0, 300px))',
          // Simple 3 column grid
        'gridColsSix': 'repeat(6, minmax(0, 500px))',
      },
      gridTemplateRows: {
        'gridRows': 'repeat(2, minmax(0, 1fr))',
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}


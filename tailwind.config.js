/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#C5DFFF',
          dark: '#061E3C',
          hover: '#1057B0',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')]
}

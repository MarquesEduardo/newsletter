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
      keyframes: {
        bell_kf: {
          '0%, 100%': {
            transform: 'rotate(-1-deg)'
          },
          '50%': {
            transform: 'rotate(10deg)'
          },
        },
      },
      animation: {
        bell: 'bell_kf 0.31s ease-in-out infinite'
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')]
}

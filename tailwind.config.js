const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('./colors')

module.exports = {
  content: ['./src/**/*.{html,js}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
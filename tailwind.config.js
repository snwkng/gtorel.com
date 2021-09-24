const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      'home-screen': "url('@/assets/images/home-screen.jpg')",
      'card-1': "url('@/assets/images/summer-woman.png')"
    },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      teal: colors.teal,
      blue: colors.sky,
      yellow: colors.amber,
      rose: colors.rose,
      white: colors.white
    },
    extend: {
      height: {
        '200': 'calc(100vh - 200px)'
      },
    },
  },
  variants: {
    extend: {
      color: ['active'],
      boxShadow: ['active', 'hover'],
    },
  },
  plugins: [],
}

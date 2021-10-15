const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      'home-screen': "url('@/assets/images/home-screen.jpg')",
      'home-screen-2': "url('@/assets/images/home-screen-2.png')",
      'card-kk': "url('@/assets/images/places/beach-kk.jpg')",
      'card-azov': "url('@/assets/images/places/sea-azov.jpg')",
      'card-ab': "url('@/assets/images/places/shells-ab.jpg')",
      'card-crimea': "url('@/assets/images/places/summer-crimea.jpg')",
      'sprinter': "url('@/assets/images/mercedessprinter.png')",
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
      minHeight: {
        '500': '500px'
      }
    },
  },
  variants: {
    extend: {
      color: ['active'],
      boxShadow: ['active', 'hover'],
      margin: ['last'],
      borderRadius: ['first', 'last']
    },
  },
  plugins: [],
}

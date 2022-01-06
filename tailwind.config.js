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
      white: colors.white,
      black: colors.black,

      paradisePink: '#ef476f',
      orangeYellowCrayola: '#ffd166',
      carribeanGreen: '#06D6A0',
      blueNCS: '#118AB2',
      midnightGreenEagleGreen: '#073B4C',
    },
    extend: {
      height: {
        '200': 'calc(100vh - 200px)'
      },
      ringColor: {
        'DEFAULT': '#ff6d00',
      },
    },
  },
  variants: {
    extend: {
      color: ['active'],
      boxShadow: ['active', 'hover'],
      margin: ['last'],
      marginLeft: ['last'],
      borderWidth: ['hover', 'focus'],
      borderRadius: ['first', 'last', 'hover', 'focus'],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'gblue' : '#1B3BD8',
      'blue' : '#0080FF',
      'deep-blue' : '#0072E4',
      'yellow' : '#F8E71C',
      'light-blue' : '#FAFCFF',
      'gray': '#707070',
      'light-gray' : '#A8A8A8',
      'lightest-gray': '#171717',
      'deep-gray' : '#4D4F5C',
      white : colors.white,
      'green': '#A1F5C3',
    },
    fontFamily: {
      sans: ['montserrat', 'roboto'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/images/radio.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
       }),

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
      }
    },
  },
  variants: {
    extend: {
        backgroundColor: ['active'],
        borderColor: ['active']
      },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}

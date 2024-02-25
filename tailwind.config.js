const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    colors:{
      'green-theme' : '#65B741',
      'facebook-new' : '#1778f2',
      'facebook': '#4267B2',
      'linkedin': '#0077b5',
    },
    extend: {
      fontFamily: {
        open_sans: "'open_sans', serif"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
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


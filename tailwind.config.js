/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,tsx}"],
  theme: {
    colors: {
      'donker': '#222831',
      'bore': '#393E46',
      'gold': '#FFD369',
      'white': '#EEEEEE'
    },
    extend: {
      fontFamily: {
        kadwa: ['Kadwa', 'sans-serif']
      },
    },
  },
  plugins: [],
}

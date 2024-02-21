/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true, 
    files: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    ],},
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

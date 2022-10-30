/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
      "./public/index.html",
      "./src/**/*.{vue,js,ts,tsx,jsx}"
  ],
  theme: {
    colors: {
        "ash-gray": "#b4b8abff",
        "prussian-blue": "#153243ff",
        "indigo-dye": "#284b63ff",
        "ivory": "#f4f9e9ff",
        "alabaster": "#eef0ebff",
        ...colors
    },
    extend: {},
  },
  plugins: [],
}

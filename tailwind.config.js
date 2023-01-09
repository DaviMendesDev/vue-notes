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
        'eagle': {
            '50': '#f6f7f5',
            '100': '#ebece8',
            '200': '#d6d8d0',
            '300': '#b4b8ab',
            '400': '#9fa493',
            '500': '#8d917e',
            '600': '#828571',
            '700': '#6d6f5f',
            '800': '#5b5c50',
            '900': '#4b4c42',
        },
        'big-stone': {
            '50': '#f3f8fc',
            '100': '#e5f1f9',
            '200': '#c6e2f1',
            '300': '#93cbe6',
            '400': '#5ab0d6',
            '500': '#3497c3',
            '600': '#2479a5',
            '700': '#1f6185',
            '800': '#1d526f',
            '900': '#153243',
        },
        'frost': {
            '50': '#f4f9e9',
            '100': '#e9f3d4',
            '200': '#d4e8ae',
            '300': '#b6d77f',
            '400': '#9ac457',
            '500': '#7caa38',
            '600': '#5f8729',
            '700': '#496724',
            '800': '#3d5321',
            '900': '#354720',
        },
        'cararra': {
            '50': '#eef0eb',
            '100': '#e4e8df',
            '200': '#c8d0bf',
            '300': '#a5b197',
            '400': '#809071',
            '500': '#657557',
            '600': '#4f5d44',
            '700': '#414c39',
            '800': '#373f30',
            '900': '#30362b',
        },
    },
    extend: {},
  },
  plugins: [],
}

const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './public/**/*.html',
    './app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'pages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'Roboto', ...fontFamily.sans],
        inter: ['Inter', ...fontFamily.sans],
        roboto: ['Roboto', ...fontFamily.sans],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
};

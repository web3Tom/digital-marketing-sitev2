/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    './core/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      // => @media (min-width: 576px) { ... }
      tab: '800px',
      md: '1024px',
      lg: '1366px',
      xl: '1500px',
      cus: '1700px',
      xxl: '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', 'roc-grotesk', ...defaultTheme.fontFamily.sans],
      },
      backgroundSize: {
        'size-250': '250% 250%',
        'size-200': '200% 200%',
        'size-150': '150% 150%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      colors: {
        primary: {
          50: '#007cc7',
          100: '#007cc7',
          200: '#007cc7',
          300: '#007cc7',
          400: '#007cc7',
          500: '#007cc7',
          600: '#007cc7',
          700: '#007cc7',
          800: '#007cc7',
          900: '#007cc7',
        },
        secondary: {
          50: '#7ed95766',
          100: '#7ed95766',
          200: '#7ed95766',
          300: '#7ed95766',
          400: '#7ed957',
          500: '#7ed957',
          600: '#7ed957',
          700: '#7ed957',
          800: '#7ed957',
          900: '#7ed957',
        },
      },
    },
  },
  plugins: [],
};

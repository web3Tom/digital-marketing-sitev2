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
      xs: '390px',
      sm: '480px',
      // => @media (min-width: 480px) { ... }
      tab: '750px',
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
        primary: '#22c55e',
        secondary: '#007cc7',
        darkBlue: '#0d1e34',
        liteBlue: '#2e769e',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['resposnive', 'hover', 'focus', 'active'],
    },
  },
};

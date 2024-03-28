/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsla(0,0%,100%,.85)',
        secondary: '#003da5',
        third: '#00205b',
        bgradient: 'linear-gradient(90deg, rgba(4, 25, 61, .95), rgba(4, 25, 61, .2) 71%);',
      },
      height: {
        sm: 'calc((100vh - 66px)/2)',
        md: 'calc(100vh - 66px)',
        lg: 'calc(2*(100vh - 66px))',
      },
      width: {
        default: '1512.8px',
      }
    },
  },
  plugins: [],
};

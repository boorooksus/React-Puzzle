/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myGreen: '#E75A2D',
        myOrange: '#00B23A',
      },
      backgroundImage: {
        patternpad: "url('/images/patternpad.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

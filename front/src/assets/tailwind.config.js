/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        patternpad: "url('/images/patternpad.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

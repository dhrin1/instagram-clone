module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scrollbar: ['dark', 'rounded']
    },
  },
  plugins: [require('@tailwindcss/forms'),  require('tailwind-scrollbar') ],
}

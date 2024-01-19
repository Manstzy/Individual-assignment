/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Wix Madefor Text', 'sans-serif'],
      },
      screens: {
        'phone': '466px',
      },
    },
  },
  plugins: [],
}


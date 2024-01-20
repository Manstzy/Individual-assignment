/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      phone: "390px",
      sm: "440px",
      md: "640px",
      lg: "768px",
      xl: "1024",
      xxl: "1280px",
    },
    extend: {
      fontFamily: {
        Poppins: ["Wix Madefor Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      miniPhone:"320px",
      phone: "390px",
      sm: "490px",
      sMd: "520px",
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

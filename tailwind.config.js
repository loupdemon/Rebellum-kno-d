/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px"
    },
    extend: {
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

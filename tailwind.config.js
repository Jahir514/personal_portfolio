/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        mainColor: '#754ef9',
        textColor: '#333333',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        whiteColor: '#fdfdfd'
      }
    },
  },
  plugins: [],
}


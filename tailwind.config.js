/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dawn: '#A4A4A4',
        blueEyes: '#1678CB',
      },
      width:{
        '1':'0.063rem',
        '271':'16.938rem',
        '368':'23rem',
        '516':'32.25rem',
      },
      height:{
        '630':'39.375rem',
      },
      boxShadow: {
        'bShadow': '1px -10px 25px rgba(201, 201, 201, 0.25), -1px 10px 25px',
      },
      margin: {
        '5px': '5px',
      }
    },
  },
  plugins: [require("daisyui")],
}
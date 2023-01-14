/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   // 'sm': '375px',
    //   // 'xl': '1200px',
    // },
    extend:
    {
      colors: {
        primary: {
          500: 'hsl(26, 100%, 55%)',
        }
      },
      fontFamily: {
        'KumbhSans': ['Kumbh Sans', 'sans-serif']
      },
      // gridTemplateColumns:{
      //   "2x":"repeat(auto-fit, minmax(350px, 1fr))"
      // },
      // gridTemplateRows:{
      //   "2x":"repeat(auto-fit, minmax(550px, 1fr))"
      // }
    },
  },
  plugins: [],
}
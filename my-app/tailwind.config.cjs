/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
}
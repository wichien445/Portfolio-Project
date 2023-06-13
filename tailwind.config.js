/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit']
      },
      backgroundImage: {
        'home': "url('/pexels-fauxels-3183150.jpg')",
      }
    },
  },
  plugins: [],
}
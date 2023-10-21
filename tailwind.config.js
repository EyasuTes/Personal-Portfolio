/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./src/pages/Home/*.jsx",
    "./src/pages/Home/Homescreen/*.jsx",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        '5e3bee':'#5e3bee',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: ['responsive', 'hover'],
      colors: {
        teal: '#14B8A6',
        gris: "#2b2b2b",
        oscuro: '#121414',
        texto: '#defaf7',
        title: '#a6fff5',
      }
    },
  },
  plugins: [],
}


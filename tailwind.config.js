/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        apex: ['var(--font-apex-pura)', 'sans-serif'], 
      },
      colors: {
        primary: '#C41E3A',
        secondary: '#D4AF37',
        background: '#FFF8E7',
        text: '#2F2F2F',
      }
    },
  },
  plugins: [],
}
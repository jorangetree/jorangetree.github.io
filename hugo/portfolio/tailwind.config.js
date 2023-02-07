/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html", "themes/ortree-theme/**/*.html", "themes/ortree-theme/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Imprima", "sans-serif"],
      heading: ["Raleway", "sans-serif"],
    },
    fontSize: {
      sm: '1rem',
      base: '1.25rem',
      xl: '1.50rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3.5rem',
      '5xl': '5rem',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'bg-alternative': '#f3ebe9',
      },
    }
  },
  plugins: [],
}

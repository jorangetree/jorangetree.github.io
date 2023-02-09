/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html", "themes/ortree-theme/**/*.html", "themes/ortree-theme/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Imprima", "sans-serif"],
      heading: ["Raleway", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'bg-alternative': '#f3ebe9',
        'primary': '#0D7E94'
      },
    }
  },
  plugins: [],
}

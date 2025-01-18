/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'HeadCity': "url('../src/7b768ed9-3e35-465d-aef7-b8eac97037ba_alta-aspect-ratio_default_0-723601349.jpg')",
        'restaurant': "url('../src/restaurant.jpg')",
      }
    },
  },
  plugins: [],
}


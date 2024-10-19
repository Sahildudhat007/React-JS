/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back_img': 'url("./assets/background-min.jpg")',
        'wedding_planner': 'url("./assets/wedding-planner.jpg")'
      }
    },
  },
  plugins: [],
}


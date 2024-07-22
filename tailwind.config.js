/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-1600px': {'max': '1600px'},
        'min-1600px': {'min': '1600px'},
        'max-1200px': {'max': '1200px'},
        'min-1200px': {'min': '1200px'},
        'min-1000px': {'min': '1000px'},
        'max-900px': {'max': '900px'},
        'min-900px': {'min': '900px'},
        'max-600px': {'max': '600px'},
        'min-600px': {'min': '600px'},
      }
    },
  },
  plugins: [],
}
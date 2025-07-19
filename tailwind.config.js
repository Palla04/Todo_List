/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this includes all JSX/TSX files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-purple-white': 'radial-gradient(circle, #a855f7, #ffffff)',
      },
    },
  },
  plugins: [],
}

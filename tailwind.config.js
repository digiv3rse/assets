/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1f71ff',
      'purple': '#7e5bef',
      'pink': '#fc1cd7',
      'orange': '#ed6a28',
      'green': '#0ff764',
      'yellow': '#ffe32c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [],
};

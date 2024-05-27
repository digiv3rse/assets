/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#0e5eea',
      'purple': '#835dff',
      'pink': '#fb01d2',
      'orange': '#ff5e0c',
      'green': '#02fa5d',
      'yellow': '#ffde04',
      'gray-dark': '#424447',
      'gray': '#a7a7a7',
      'gray-light': '#e0e0e0',
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'black':'#343434',
      'white':'#FFFFFF',
      'purple':'#b266b2',
      'light-gray': '#F5F5F5',
      'hover-gray': '#EAEAEA',
    },
    extend: {},
  },
  plugins: [],
}


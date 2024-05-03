/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-1': '#262626',
       'color-2' : '#6D6D6D',
      },
    },
  },
  plugins: [],
}
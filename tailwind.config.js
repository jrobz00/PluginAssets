/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['"Karla"', 'sans-serif'],
      },
    },
    color: {
      'gray': '#666666'
    }
  },
  plugins: [
    daisyui,
  ],
}
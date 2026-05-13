/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#7C3AED',
          violet: '#6D28D9',
          light: '#A78BFA',
        },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D28D9',
          dark: '#5B21B6',
          light: '#8B5CF6'
        },
      },
      fontSize: {
        'xxs': '0.625rem', // Adding custom font size
      },
    },
  },
  plugins: [],
};
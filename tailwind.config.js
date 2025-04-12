/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4318FF',
        'text-primary': '#1B2559',
        'text-secondary': '#A3AED0',
        background: '#E9EDF7',
      },
    },
  },
  plugins: [],
};

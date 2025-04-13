// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        primary: '#4318FF',
        'text-primary': '#1B2559',
        'text-secondary': '#A3AED0',
        background: '#E9EDF7',
        green: '#05CD99',
      },
    },
  },
  plugins: [],
};

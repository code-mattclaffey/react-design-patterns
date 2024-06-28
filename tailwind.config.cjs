/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        code: {
          950: '#1E1E3F',
          750: '#2D2B55',
          600: '#a03fc0',
          500: '#A599E9'
        }
      }
    }
  },
  plugins: []
};

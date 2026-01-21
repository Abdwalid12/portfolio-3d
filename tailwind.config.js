/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'minimalist-white': '#FAFAFA',
        'minimalist-gray': '#F5F5F5',
        'minimalist-text': '#262626',
        'minimalist-accent': '#1A1A1A',
      },
      spacing: {
        'comfortable': '3rem',
        'generous': '4rem',
        'spacious': '6rem',
      },
    },
  },
  plugins: [],
}
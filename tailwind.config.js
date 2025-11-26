/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0B1021',
        sky: '#A5B4FC',
        mint: '#2DD4BF',
        sand: '#F1F5F9',
      },
    },
  },
  plugins: [],
};

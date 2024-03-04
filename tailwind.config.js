/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#002348',
        'dark-oxford-blue': '#001731',
        'satin-sheen-gold': '#C29B40',
      },
    },
  },
  plugins: [],
}

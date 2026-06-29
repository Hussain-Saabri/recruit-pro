/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5F4FF',
          100: '#EAE8FF',
          500: '#6D5DF6',
          600: '#5A4EE0',
        }
      },
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: '#14b8a6',
      },
    },
  },
  plugins: [],
  variants:{
     scrollbar: ['rounded']
  }
}

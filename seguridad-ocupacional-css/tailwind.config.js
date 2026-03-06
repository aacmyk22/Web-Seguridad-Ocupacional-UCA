/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uca-blue': '#1e3a5f',
        'uca-light-blue': '#f0f2f5',
        'uca-orange': '#ff6b35',
      },
    },
  },
  plugins: [],
}


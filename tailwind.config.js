/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2.5s linear infinite"
      },
      backgroundImage: {
        "town": "url('/public/town.png')",
      }
    },
  },
  plugins: [],
}


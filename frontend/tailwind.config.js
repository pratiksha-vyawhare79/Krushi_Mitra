/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#2E7D32',
        'primary-light': '#66BB6A',
        'background-off-white': '#F8FAF5',
        'accent-yellow': '#F9A825',
        'text-dark': '#263238',
        'success-green': '#43A047',
        'warning-orange': '#FB8C00',
        'danger-red': '#E53935',
      }
    },
  },
  plugins: [],
}

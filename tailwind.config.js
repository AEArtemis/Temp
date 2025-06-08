/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      primary: {
        DEFAULT: '#57534e', // stone-600
        foreground: '#f5f5f4', // stone-100
      },
      background: '#fafaf9', // stone-50
      foreground: '#1c1917', // stone-900
    },
  },
  },
  plugins: [],
};

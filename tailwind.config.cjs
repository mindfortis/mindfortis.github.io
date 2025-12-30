/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0e0e0e',
        'soft-green': '#A7C7A8', // Example soft green
        'pastel-purple': '#B0A2C0', // Example pastel purple
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'], // Prioritizing Inter, then DM Sans, then generic sans-serif
      },
    },
  },
  plugins: [],
};
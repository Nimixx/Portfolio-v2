/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#100a21',
        primary_light: '#32294b',
        primary_dark: '#0b0716',
        primary_text: '#e8e7eb',
        secondary_text: '#8d889b',
        primary_gray: '#8d889a',
        secondary: '#e5dbff'
      },
      fontFamily: {
        primary: ['"Open Sans"']
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

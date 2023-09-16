/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary_black: '#0d0f10',
        primary_white: '#f5f5f5',
        primary_gray: '#616264',
        secondary_black: '#1c1e22',
        secondary_white: '#deded0'
      },
      fontFamily: {
        primary: ['Inter']
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

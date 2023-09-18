/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#222734',
        primary_light: '#383d48',
        primary_dark: '#1f232f',
        text: '#f5f5f5',
        primary_gray: '#c1c3ca',
        secondary: '#f4ddbc',
      },
      fontFamily: {
        primary: ['"Open Sans"']
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        primary_light: 'rgb(var(--color-primary-light) / <alpha-value>)',
        primary_dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
        primary_text: 'rgb(var(--color-primary-text) / <alpha-value>)',
        secondary_text: 'rgb(var(--color-secondary-text) / <alpha-value>)',
        accent_1: 'rgb(var(--color-accent) / <alpha-value>)',
        accent_2: 'rgb(var(--color-accent2) / <alpha-value>)',
        accent_3: 'rgb(var(--color-accent3) / <alpha-value>)',
        succes: 'rgb(var(--color-success) / <alpha-value>)',
      },
      fontFamily: {
        primary: ['"Open Sans"']
      },
      backgroundImage:{
        'avatar-pattern': "url('/src/assets/heroIII.jpg')"
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

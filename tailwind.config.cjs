/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#24b600ff',
        accent: '#6bc4ffff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

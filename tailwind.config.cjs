/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A148C',    // Deep purple
        secondary: '#7E57C2',  // Lighter purple
        accent: '#FFD700',     // Gold accent
        neutral: '#F5F5F5',    // Light grey
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

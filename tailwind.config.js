/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coffee1': "url('/img/coffee1.jpg')",
        'coffee2': "url('/img/coffee2.jpg')",
        'coffee3': "url('/img/coffee3.jpg')",
        'coffee14': "url('/img/coffee14.jpg')",
        'coffee8': "url('/img/coffee8.jpg')",
      },
    },
  },
  plugins: [],
}

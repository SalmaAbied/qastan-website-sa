module.exports = {
  darkMode: false, 
  content: [
    './src/**/*.{ts,tsx}',
    './src/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}

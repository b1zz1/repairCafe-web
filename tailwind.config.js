/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
      colors: {
      'purple.1': '#F5F5FB',
      'purple.2': '#DBDBEB',
      'purple.3': '#E3E6FF',
      'purple.4': '#939AFE',
      'purple.5': '#5D6BFF',
      'purple.6': '#5060FF',
      'purple.7': '#3C4DFF',

      'white.1': '#FFFFFF',
      'white.2': '#F5F5F5',
      'white.3': '#A9ABC2',
      'white.4': '#4B4C57',
      'white.5': '#2E2F34',

      'error.1': '#FF7B7B',
      'error.2': '#FF3838',
      'error.3': '#F42D2D',

      'teste.1': '#5C6089',
      'teste.2': '#5058AE',

      'success': '#93D724',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}", // если используете папку app
    ],
    theme: {
    extend: {
      backgroundImage: {
        'bg-sunny': "url('/public/backgrounds/sunny.webp')",
        'bg-cloudy': "url('/public/backgrounds/cloudy.webp')",
        'bg-rainy': "url('/public/backgrounds/rainy.webp')",
        'bg-snowy': "url('/public/backgrounds/snowy.webp')",
      },
    },
  },
    plugins: [],
}
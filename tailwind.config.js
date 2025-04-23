/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // src folder files ku tailwind apply aagum
  ],
  theme: {
    extend: {
      colors:{
      goldenYellow: '#FFD152',
      goldenYellowlight:"#ffdc5e",
      mainpagebg:"#ffd129",
      },
    },
  },
  plugins: [],
}


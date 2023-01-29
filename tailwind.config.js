/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "complementary-grey": "#2B2B2B" 
        }
      },
    },
    plugins: [],
  }
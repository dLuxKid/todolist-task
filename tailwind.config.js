/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-pry": "#101828",
        "blue-pry": "#3F5BF6",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        big: "992px",
      },
      boxShadow: {},
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        "blue-pry": "#3F5BF6",
        "gray-50": "#F9FAFB",
        "gray-100": "#F2F4F7",
        "gray-200": "#EAECF0",
        "gray-300": "#D0D5DD",
        "gray-500": "#667085",
        "gray-600": "#475467",
        "gray-700": "#344054",
        "gray-900": "#101828",
        "gray-normal": "#272727",
      },
    },
  },
  plugins: [],
};

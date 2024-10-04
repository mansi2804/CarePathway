/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#48CCCC",
        brightColor: "#F5F5DC",
        backgroundColor: "#36ae9a",
      },
    },
  },
  plugins: [],
};

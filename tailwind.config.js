/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['"Helvetica Neue", sans-serif'],
      },
      colors: {
        primary: "#79A471",
        secondary: "#B5EBAB",
        headerColor: "#F7F8F7",
        gold: "#C59B4B",
        "gray-light": "#4f4f4fb3",
        "gray-dark": "#4f4f4fff",
        gray: "#4f4f4f",
      },
      boxShadow: {
        DEFAULT: "0px 1px 2px 0px rgba(68, 68, 68, 0.5)",
      },
      screens: {
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        wide: "1440px",
        extraWide: "1920px",
      },
    },
  },
  plugins: [],
};

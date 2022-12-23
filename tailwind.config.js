/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './public/**/*.html',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 'media' is the default, change to 'class' if you want to use dark mode in with class names
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        roboto: ["Roboto Mono", "sans-serif"],
        pixellari: ["Pixellari", "sans-serif"],
      },
      colors: {
        "soft-blue-100": "#569ff6",
        "soft-blue-200": "#4a8ee6",
        "soft-blue-300": "#3d7dd6",
        "soft-blue-400": "#316cc6",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};

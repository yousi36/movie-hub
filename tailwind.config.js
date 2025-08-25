/** @type {import("tailwindcss").Config} */
export default {
  // 👇 Files Tailwind will scan for class names
  content: [
    "./index.html",               // if using Vite, this is your entry HTML
    "./src/**/*.{js,ts,jsx,tsx}", // all React components inside /src
  ],
  theme: {
    extend: {}, // customize theme here (colors, fonts, spacing, etc.)
  },
  plugins: [], // add Tailwind plugins (forms, typography, etc.)
};

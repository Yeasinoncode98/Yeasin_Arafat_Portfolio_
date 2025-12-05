/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FBBF24", // yellow-400
        "background-light": "#F3F4F6", // gray-100
        "background-dark": "#0A192F", // Dark Navy Blue
        'card-dark': '#112240',
      },
      fontFamily: {
        display: ["Exo 2", "Poppins", "sans-serif"],
      },
      animation: {
        'shake': 'shake-skill 0.82s cubic-bezier(.36,.07,.19,.97) both',
        'border-glow': 'pulse-border-glow 2s infinite ease-in-out',
        'spin-20s': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}

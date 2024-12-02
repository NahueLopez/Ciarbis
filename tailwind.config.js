/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'violeta': '#8B2183',  // Color violeta
        'celeste': '#0B83CC',  // Color celeste
      },
      textShadow: {
        'glow': '0 0 10px rgba(255, 0, 255, 0.5)',  // Ajusta el color y el tamaño
      },
    },
  },
  plugins: [],
}
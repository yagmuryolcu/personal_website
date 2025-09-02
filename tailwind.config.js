export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainLight: '#F4F4F4',
        mainDark: '#2A262B',
      },
      fontFamily: {
        inter: ['Inter'], 
        playfair: ['Playfair Display'],
      },
    },
  },
  plugins: [],
}

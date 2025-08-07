module.exports = {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF8700",
          blue: "#00AEEF",
          gray: "#4b4b4b",
          dark: "#303030"
        }
      },
      fontFamily: {
        mclaren: ['mclaren', 'sans-serif'],
        rugen: ['rugen', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
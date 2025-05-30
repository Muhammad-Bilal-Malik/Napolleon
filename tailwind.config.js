module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // adjust based on your project structure
  ],
  theme: {
    screens: {
      sm: "440px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        primary: "#FF0000",
      },
    }, // You can extend default theme here
  },
  plugins: [],
};

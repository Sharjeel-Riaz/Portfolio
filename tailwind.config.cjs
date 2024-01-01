/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#B7BEFF",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        xmd: "870px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        profile: {
          "100%": {
            transform: "translateY(20px)",
          },
        },
        blob: {
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
        hero: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(20px)",
          },
        },
        contact: {
          "100%": {
            transform: "translateX(30px)",
          },
        },
      },
      animation: {
        profile: "profile 2s infinite ease alternate",
        contact: "contact 1s infinite ease alternate",
        hero: "hero 1.5s infinite ease alternate",
        blob: "blob 5s infinite ease-in-out alternate",
      },
    },
  },
  plugins: [],
};

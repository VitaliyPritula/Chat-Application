/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        while: "#ffffff",

        black: {
          50: "#131313",
          100: "#12141D",
        },
        grey: "#636363",

        accent: {
          50: "#2B59FF",
          100: "#323232",
          200: "#c2c2c2",
        },
      },
      screens: {
        sm: "320px",
        // => @media (min-width: 320px) { ... }
        md: "425px",
        md1: "540px",
        md2: "620px",
        // => @media (min-width: 375px) { ... }
        lg: "768px",
        lg2: "840px",
        lx: "990px",
        // => @media (min-width: 768px) { ... }
        xl: "1024px",
        // => @media (min-width: 1024px) { ... }
        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      fontFamily: {
        inter: ["Inter"],
        Clachdisplay: ["ClashDisplay", "serif"],
      },
      fontWeight: {
        //font-medium
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      fontSize: {
        //text-m
        xs: "13px",
        s: "14px",
        m: "16px",
        sm: "18px",
        md: "20px",
        l: "24px",
        lg: "32px",
        xlg: "40px",
        xl: "48px",
        "2xl": "64px",
        "3xl": "80px",
        "4xl": "86px",
      },
    },
  },
  plugins: [],
};

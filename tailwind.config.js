/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        "design-slate": {
          100: "hsl(202, 86%, 94%)",
          300: "hsl(203, 41%, 72%)",
          500: "hsl(200, 26%, 54%)",
          700: "hsl(200, 24%, 40%)",
          900: "hsl(202, 55%, 16%)",
        },
        "design-white": "hsl(0, 0%, 100%)",
        "design-primary": {
          lime: "hsl(61, 70%, 52%)",
          red: "hsl(4, 69%, 50%)",
        },
      },
      screen: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1440px",
      },
      "design-font-size": {
        defaults: "16px",
      },
    },
  },
  plugins: [],
};

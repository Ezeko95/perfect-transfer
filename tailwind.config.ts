import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#29abe3",
        primaryDark: "#3829e3",
        logo: "#edebeb",
        bg1: "#4c05b0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        monserrat: ["Monserrat", "serif"],
        garamond: ["EB Garamond", "sans-serif"],
        tinos: ["Tinos", "serif"],
      },
      animation: {
        fade: "fadeIn 5s ease-in-in",
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { backgroundColor: "colors.red.300" },
          "100%": { backgroundColor: "colors.transparent" },
        },
      }),
    },
  },
  plugins: [],
};
export default config;

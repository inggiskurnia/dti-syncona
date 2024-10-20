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
        background: "var(--background)",
        foreground: "var(--foreground)",
        synconaltdPink: "#b10097",
        synconaltdGray: "#131e2a",
        synconaltdLightGray: "#e4efef",
        synconaltdDarkGreen: "#131E2A",
      },
      fontFamily: {
        subject: ["SubjectRegular", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fill: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        fill: "fill 5s linear forwards",
      },
    },
  },
  plugins: [],
};
export default config;

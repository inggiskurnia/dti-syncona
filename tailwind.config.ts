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
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marqueeLeft: "marqueeLeft 20s linear infinite",
        marqueeRight: "marqueeRight 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

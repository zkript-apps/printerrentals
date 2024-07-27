import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./module/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          700: "#075985",
          800: "#0c4a6e",
          900: "#082f49",
        },
        secondary: {
          600: "#eab309",
          700: "#fde047",
          800: "#eab308",
          900: "#ca8a04",
        },
        text: {
          primary: "#0369a1",
          secondary: "#eab308",
          dark: "#111827",
        },
        light: {
          700: "#f3f4f6",
          800: "#cbd5e1",
          900: "#64748b",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        auto: "auto",
        cover: "cover",
        contain: "contain",
      },
    },
  },
  plugins: [],
};

export default config;

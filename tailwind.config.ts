import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./module/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
				fade: 'fadeIn 1s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        projectCardLightGray: '0 0 10px rgba(255, 255, 255, 0.75)',
        projectCardDefault: '0 0 10px rgba(0, 0, 0, .95)',
        projectImgDefault: '0 0 10px rgba(0, 0, 0, .4)',
        projectTechUsedDefault: '0 0 10px rgba(0, 0, 0, .6)',
      }
    },
  },
  plugins: [],
};
export default config;

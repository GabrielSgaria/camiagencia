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
        'marromCami': '#a86344',
        'cinzaCami': '#575757',
        'pretoCami': '#0c0a09',
      },
    }
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
      }
    },
    extend: {
      colors: {
        'marromCami': '#a76243',
        'marromCami2': '#d1a999',
        'brancoCami': '#f6f0ee',
        'verdeCami':'#09524c',
        'azulCami':'#273f56',
        'cinzaCami': '#575757',
        'pretoCami': '#0c0a09',
      },
    }
  },
  plugins: [],
};
export default config;

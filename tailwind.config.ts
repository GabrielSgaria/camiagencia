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
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      colors: {
        'marromCami': '#a76243',
        'marromCami2': '#d1a999',
        'brancoCami': '#f6f0ee',
        'verdeCami': '#09524c',
        'azulCami': '#273f56',
        'cinzaCami': '#575757',
        'pretoCami': '#0c0a09',
      },
    }
  },
  plugins: [],
};
export default config;

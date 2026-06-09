/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          500: 'var(--color-primary-500)',
          900: 'var(--color-primary-900)',
        },
        neutral: {
          0: 'var(--color-neutral-0)',
          500: 'var(--color-neutral-500)',
          700: 'var(--color-neutral-700)',
          900: 'var(--color-neutral-900)',
        },
        dark: {
          '40a': 'var(--color-dark-40a)',
          '60a': 'var(--color-dark-60a)',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ... (保留設定好的顏色)
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          500: 'var(--color-primary-500)',
          900: 'var(--color-primary-900)',
        },
        neutral: {
          0: 'var(--color-neutral-0)',
          500: 'var(--color-neutral-500)',
          700: 'var(--color-neutral-700)',
          900: 'var(--color-neutral-900)',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
      },
      // 👇 新增自訂動畫設定 👇
      keyframes: {
        // 上下浮動動畫
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        // 緩慢旋轉動畫
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spinSlow 15s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;


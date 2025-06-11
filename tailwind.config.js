/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xxs: '540px',
      },
      colors: {
        background: 'var(--background)',
        backgroundDark: 'var(--background-dark)',
        backgroundHighlight: 'var(--background-highlight)',
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        text: {
          DEFAULT: 'var(--text)',
        },
        secondary: 'var(--text-secondary)',
        light: 'var(--text-light)',
        highlight: 'var(--highlight)',
        dark: 'var(--text-dark)',
        danger: 'var(--text-danger)',
      },
      animation: {
        marquee: 'marquee 12s linear infinite',
        marquee2: 'marquee2 12s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

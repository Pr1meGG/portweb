/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0a0b10',
          card: '#12131d',
          cardAlt: '#181926',
          border: '#2a2b3d',
          lime: '#ccff00',
          pink: '#ff2a85',
          cyan: '#00f0ff',
          yellow: '#ffe600',
          purple: '#b026ff',
          textMuted: '#9496a8',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'brutal-lime': '4px 4px 0px 0px #ccff00',
        'brutal-pink': '4px 4px 0px 0px #ff2a85',
        'brutal-cyan': '4px 4px 0px 0px #00f0ff',
        'brutal-yellow': '4px 4px 0px 0px #ffe600',
        'brutal-white': '4px 4px 0px 0px #ffffff',
        'brutal-dark': '4px 4px 0px 0px #0a0b10',
        'brutal-lime-lg': '6px 6px 0px 0px #ccff00',
        'brutal-pink-lg': '6px 6px 0px 0px #ff2a85',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};

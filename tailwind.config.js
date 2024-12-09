/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000000',    // Pure black
        secondary: '#1a1a1a',  // Dark gray
        accent: '#4F46E5',     // Indigo
        'accent-dark': '#4338CA', // Darker indigo
        text: '#808080',       // Medium gray
        'text-light': '#d4d4d4', // Light gray
        background: '#000000'  // Black background
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'code-grid': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'code-rain': 'code-rain 20s linear infinite',
        'pulse-accent': 'pulse-accent 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'code-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'pulse-accent': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        },
      },
    },
  },
  plugins: [],
}

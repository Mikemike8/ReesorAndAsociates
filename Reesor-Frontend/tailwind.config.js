module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Wix Madefor Display"', 'sans-serif'], // Added Wix Madefor Display font
      },
      colors: {
        'custom-blue': '#003366',
      },
      animation: {
        marquee: 'marquee 60s linear infinite', // Adjust the duration for slower speed
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

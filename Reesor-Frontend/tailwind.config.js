module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: {
        'custom-top-bottom': '6.27px',
        'custom-left-right': '12.55px',
      },
      fontFamily: {
        display: ['"Wix Madefor Display"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], // Added Wix Madefor Display font
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

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#173a36',
        muted: '#647773',
        green: {
          DEFAULT: '#0d6457',
          dark: '#084b44',
        },
        lime: '#9bba4f',
        cream: '#f5f7ef',
        paper: '#fffefa',
        blue: '#022e4d',
        sky: '#b6e6fa',
        clay: '#855b49',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Manrope"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

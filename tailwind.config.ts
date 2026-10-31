export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: '#414b3b',
          dark: '#31392c',
        },
        gold: {
          DEFAULT: '#ab8742',
          dark: '#927134',
        },
        sage: {
          DEFAULT: '#8ca87b',
          soft: '#e8ede1',
        },
        cream: '#faf6ee',
        oat: '#f2efe4',
        paper: '#fffdf8',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Manrope"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

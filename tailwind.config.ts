export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#ab8742',
          dark: '#927134',
          soft: '#f3ead7',
        },
        olive: {
          DEFAULT: '#414b3b',
          dark: '#2f372b',
        },
        sage: '#8ca87b',
        cream: '#fbf7ee',
        paper: '#fffdfa',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Manrope"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

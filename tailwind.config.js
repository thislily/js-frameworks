export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Kantumruy Pro'],
        heading: ['Bagel Fat One'],
      },
      animation: {
        'loading-bar': 'loading-bar 1.5s ease-in-out infinite',
      },
      keyframes: {
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};

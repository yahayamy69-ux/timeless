export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0A0A0A',
        royal: '#C9A84C',
        shimmer: '#f5df8a',
        obsidian: '#1A1A1A',
        ivory: '#F5F0E8',
        antique: '#8A7A56',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        none: 'none',
      }
    },
  },
  plugins: [],
};

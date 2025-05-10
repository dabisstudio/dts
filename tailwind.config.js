/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary base colors
        'charcoal': '#1E1E1E',
        'offwhite': '#F7F7F7',
        // Accent colors
        'electric-blue': '#007AFF',
        'refined-gold': '#C6A46F',
        'deep-navy': '#0A1931',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-large': ['4rem', { lineHeight: '1.1' }],
        'display-medium': ['3rem', { lineHeight: '1.2' }],
        'display-small': ['2.5rem', { lineHeight: '1.2' }],
        'heading-large': ['2rem', { lineHeight: '1.3' }],
        'heading-medium': ['1.5rem', { lineHeight: '1.4' }],
        'heading-small': ['1.25rem', { lineHeight: '1.4' }],
      },
      spacing: {
        'menu-width': '280px',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [],
}

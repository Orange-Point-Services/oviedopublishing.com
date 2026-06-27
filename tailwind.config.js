/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        coral: {
          50: '#fff3f0',
          100: '#ffe4de',
          200: '#ffccc0',
          300: '#ffa594',
          400: '#ff7255',
          500: '#f0522e',
          600: '#d93a18',
          700: '#b52d10',
          800: '#962812',
          900: '#7c2515',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle, #f59e0b 0%, #f97316 35%, #ef4444 75%, #dc2626 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        'book': '6px 6px 0 rgba(0,0,0,0.15), 12px 12px 30px rgba(0,0,0,0.25)',
        'book-hover': '8px 8px 0 rgba(0,0,0,0.18), 16px 16px 40px rgba(0,0,0,0.3)',
        'card': '0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.07)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 16px 48px rgba(0,0,0,0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-12px) rotate(-2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};

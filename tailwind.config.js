/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        petrol: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#003B4D',
          950: '#0c4a6e',
        },
        coolGrey: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#4A5961',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInFromLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInFromRight 0.8s ease-out forwards',
        'slide-in-up': 'slideInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'infinity-glow': 'infinityGlow 3s ease-in-out infinite',
        'glass-shine': 'glassShine 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(50px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInFromLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInFromRight: {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          'from': { opacity: '0', transform: 'translateY(50px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%': { filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 40px rgba(34, 211, 238, 0.8))' },
        },
        infinityGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.6))' },
          '50%': { filter: 'drop-shadow(0 0 40px rgba(34, 211, 238, 1))' },
        },
        glassShine: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '50%': { transform: 'translateX(100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(100%) skewX(-15deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(34, 211, 238, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-cyan': '0 8px 32px 0 rgba(34, 211, 238, 0.2)',
        'glass-blue': '0 8px 32px 0 rgba(59, 130, 246, 0.2)',
        'glass-purple': '0 8px 32px 0 rgba(147, 51, 234, 0.2)',
        'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)',
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
        'neon-purple': '0 0 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'glass-gradient-dark': 'linear-gradient(135deg, rgba(0, 59, 77, 0.2), rgba(74, 89, 97, 0.1))',
      },
    },
  },
  plugins: [],
}
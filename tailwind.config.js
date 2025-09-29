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
        brand: {
          primary: '#02a2bd',
          info: '#06b6d4',
        },
        status: {
          success: '#22c55e',
          warning: '#faad14',
          error: '#f5222d',
        },
        light: {
          bodyBg: '#F3F6FB',
          headerBg: '#E6ECF5',
          siderBg: '#E6ECF5',
          cardBg: '#FFFFFF',
          text: '#0F172A',
          textMuted: '#64748B',
          border: '#CBD5E1',
          accentPrimary: '#2563EB',
          accentSecondary: '#06B6D4',
          accentViolet: '#7C3AED',
          accentGreen: '#10B981',
          accentError: '#EF4444',
        },
        dark: {
          bodyBg: '#000000',
          headerBg: '#0a0a0a',
          siderBg: '#0a0a0a',
          cardBg: '#111111',
          text: '#ffffff',
          textMuted: '#a3a3a3',
          border: '#262626',
          accentPrimary: '#2563EB',
          accentSecondary: '#06B6D4',
          accentViolet: '#7C3AED',
          accentGreen: '#10B981',
          accentError: '#EF4444',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInFromLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInFromRight 0.6s ease-out forwards',
        'slide-in-up': 'slideInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInFromLeft: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInFromRight: {
          'from': { opacity: '0', transform: 'translateX(30px)' },
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
        'glass': '0 8px 32px 0 rgba(6, 182, 212, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
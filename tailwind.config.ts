import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Temel renkler
        background: '#0B0B0F',   // siyah arkaplan (logo zeminine yakın)
        foreground: '#FFFFFF',   // beyaz metin

        // Ay-altın (logo sarısı) — ANA
        primary: {
          50:  '#FFF9EB',
          100: '#FFEEC6',
          200: '#FFD98D',
          300: '#FEC84A',
          400: '#F5B52A',
          500: '#D19A2A',   // ana
          600: '#B67F1E',
          700: '#936416',
          800: '#6F4A10',
          900: '#4E340B',
        },

        // Eski sınıfları korumak için secondary (primary ile uyumlu)
        secondary: {
          50:  '#FFF9EB',
          100: '#FFEEC6',
          200: '#FFD98D',
          300: '#FEC84A',
          400: '#F5B52A',   // gradient "to-secondary-400" için
          500: '#E3A61F',
          600: '#C78B17',
          700: '#A37012',
          800: '#7C540D',
          900: '#563909',
        },

        // Sıcak vurgu (buton/hover)
        accent: {
          50:  '#FFF5E6',
          100: '#FFE0B8',
          200: '#FFC780',
          300: '#FFAD47',
          400: '#F3922C',
          500: '#E67E22',   // vurgu
          600: '#C76619',
          700: '#A14E13',
          800: '#7A390D',
          900: '#522508',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'system-ui', 'sans-serif'],
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInLeft: { '0%': { opacity: '0', transform: 'translateX(-20px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        slideInRight: { '0%': { opacity: '0', transform: 'translateX(20px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.9)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        glow: {
          '0%': { boxShadow: '0 0 18px rgba(209,154,42,0.25)' }, // primary-500
          '100%': { boxShadow: '0 0 32px rgba(209,154,42,0.60)' },
        },
      },

      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
}

export default config
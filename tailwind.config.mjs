/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#3b82f6',
          'primary-focus': '#2563eb',
          'primary-content': '#ffffff',
          secondary: '#64748b',
          'secondary-focus': '#475569',
          'secondary-content': '#ffffff',
          accent: '#f59e0b',
          'accent-focus': '#d97706',
          'accent-content': '#ffffff',
          neutral: '#374151',
          'neutral-focus': '#1f2937',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f8fafc',
          'base-300': '#e2e8f0',
          'base-content': '#1f2937',
          info: '#0ea5e9',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
      {
        dark: {
          primary: '#60a5fa',
          'primary-focus': '#3b82f6',
          'primary-content': '#1e293b',
          secondary: '#94a3b8',
          'secondary-focus': '#64748b',
          'secondary-content': '#1e293b',
          accent: '#fbbf24',
          'accent-focus': '#f59e0b',
          'accent-content': '#1e293b',
          neutral: '#374151',
          'neutral-focus': '#4b5563',
          'neutral-content': '#f1f5f9',
          'base-100': '#1e293b',
          'base-200': '#334155',
          'base-300': '#475569',
          'base-content': '#f1f5f9',
          info: '#38bdf8',
          success: '#34d399',
          warning: '#fbbf24',
          error: '#f87171',
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: '',
    logs: true,
  },
}

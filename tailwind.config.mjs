/**** TailwindCSS config ****/
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:'#f5f3ff',100:'#ede9fe',200:'#ddd6fe',300:'#c4b5fd',400:'#a78bfa',
          500:'#8b5cf6',600:'#7c3aed',700:'#6d28d9',800:'#5b21b6',900:'#4c1d95'
        },
        accent: {
          400:'#818cf8', // indigo-400
          500:'#6366f1', // indigo-500
          600:'#4f46e5'  // indigo-600
        },
        glow: '#7c3aed'
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(90, 75, 200, 0.25)',
        glow: '0 0 0 4px rgba(124,58,237,0.25)'
      },
      backdropBlur: {
        xs: '2px'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(124,58,237,0.3)' },
          '50%': { boxShadow: '0 0 0 8px rgba(124,58,237,0.1)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        fadeUp: 'fadeUp .7s ease forwards',
        shimmer: 'shimmer 1.2s linear infinite'
      }
    }
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wise: { //
          'light-gray': '#FAFAFA', //
          'gray': '#6B7280', //
          'dark-gray': '#1F2937', //
          'border': '#E5E7EB', //
          'pink': '#FEE2E2', //
          'brown': '#991B1B', //
          'primary': '#3B82F6',   // Blue
          'secondary': '#8B5CF6', // Purple
          'success': '#10B981',   // Emerald
          'warning': '#F59E0B',   // Yellow/Orange
          'error': '#EF4444',     // Red
          'info': '#06B6D4',      // Cyan
        }
      },
      animation: { //
        'fade-in': 'fadeIn 0.3s ease-in-out', //
        'slide-up': 'slideUp 0.3s ease-out', //
        'bounce-subtle': 'bounceSubtle 0.6s ease-in-out', //
      },
      keyframes: { //
        fadeIn: { //
          '0%': { opacity: '0' }, //
          '100%': { opacity: '1' } //
        },
        slideUp: { //
          '0%': { transform: 'translateY(10px)', opacity: '0' }, //
          '100%': { transform: 'translateY(0)', opacity: '1' } //
        },
        bounceSubtle: { //
          '0%, 100%': { transform: 'translateY(0)' }, //
          '50%': { transform: 'translateY(-2px)' } //
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Pastikan font Inter juga terdefinisi kalau kamu pakai
      },
    },
  },
  plugins: [],
}
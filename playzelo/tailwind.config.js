/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spinCoin': 'spinCoin 4s linear infinite',
        'shimmer': 'shimmer 2.2s linear infinite',
        'pulse-glow': 'pulse 1.5s infinite alternate',
        'swing': 'swing 2s infinite ease-in-out',
        'blink': 'blink 0.7s infinite',
        'dropdownFade': 'dropdownFade 0.25s ease',
        'flipTop': 'flipTop 420ms cubic-bezier(.2, .9, .3, 1) forwards',
        'flipBottom': 'flipBottom 420ms cubic-bezier(.2, .9, .3, 1) forwards',
        'popupBackground': 'popupBackground 5s ease infinite',
        'flyIn': 'flyIn 0.8s ease-out',
        'floatUp': 'floatUp 5s ease-in-out forwards',
        'bounce': 'bounce 1s infinite',
        'spark': 'spark 1s infinite',
        'fall': 'fall 3s linear',
      },
      keyframes: {
        spinCoin: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        },
        shimmer: {
          'to': { transform: 'translateX(220%)' }
        },
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        dropdownFade: {
          'from': { opacity: '0', transform: 'translateY(-10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        flipTop: {
          'from': { transform: 'rotateX(0deg)' },
          'to': { transform: 'rotateX(-90deg)' }
        },
        flipBottom: {
          'from': { transform: 'rotateX(90deg)' },
          'to': { transform: 'rotateX(0deg)' }
        },
        popupBackground: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        flyIn: {
          '0%': { opacity: '0', transform: 'translate(-100px, 40px) scale(0.6)' },
          '100%': { opacity: '1', transform: 'translate(0, 0) scale(1)' }
        },
        floatUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-60px)' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        spark: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        fall: {
          '0%': { transform: 'translateY(-10%)', opacity: '1' },
          '100%': { transform: 'translateY(110vh)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}
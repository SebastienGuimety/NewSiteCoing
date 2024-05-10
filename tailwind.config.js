/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['BCMikserSemiBold', 'system-ui', 'sans-serif'], // Ajoutez votre police personnalisée
      },
      keyframes: {
        slideIn: {
          'from': { opacity: 0, transform: 'translateX(30px)' },
          'to': { opacity: 1, transform: 'translateX(0)' },
        },
        slideOut: {
          'from': { opacity: 1, transform: 'translateX(0)' },
          'to': { opacity: 0, transform: 'translateX(-30px)' },
        }
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'slide-out': 'slideOut 0.5s ease-out forwards',
      }, 

      screens: {
        '2xl': '1536px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'xs': '480px', // Ceci est pour les écrans jusqu'à 480px
        '2xs': '320px' // Ajout d'un breakpoint encore plus petit si nécessaire
      }
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       slideIn : {
//         '0%' : { transform : 'translateX(-100%)' },
//         '100%' : { transform : 'translateX(0%)'  },
//       },
//       slide : {
//         '0%' : { scale : 0 },
//         '100%' : { scale : 1  },
//       },
//       animation: {
//         slideIn: 'slideIn 3s ease-in-out',
//         slide: 'slide 3s ease-in-out',
//       },
//     },
//   },
//   plugins: [],
// }


import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomUp: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        slideIn : {
          '0%' : { transform : 'translateX(-100%)  rotate(360deg)' },
          '100%' : { transform : 'translateX(0%) rotate(0)'  },
        },
        slideOut : {
          '0%' : { transform : 'translateX(0%)', opacity : '1' },
          '100%' : { transform : 'translateX(-100%)' , opacity : '0' },
        },
        slideo : {
          '0%' : { transform : 'translateX(-400%)  rotate(100deg)', opacity : '0'  },
          '100%' : { transform : 'translateX(0%)  rotate(0deg)' , opacity : '1'  },
        },
        click : {
          '0%' : {  opacity : '1'   },
          '100%' : {   opacity : '0'  },
        }
      },
      animation: {
        zoomUp: 'zoomUp 3s ease-in-out',
        slideIn: 'slideIn 1s ease-in-out 0s',
        slideOut: 'slideOut 3s ease-in-out',
        slideo: 'slideo 3s ease-in-out',
        click: 'click 3s ease-in-out',
      },
    },
  },
  plugins: [],
}


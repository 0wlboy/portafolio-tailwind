/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./index.html","./node_modules/**/*.{js,ts,jsx,tsx}", 'node_modules/preline/dist/*.js',"./node_modules/flowbite/dist/*.js"],
  theme: {
    colors:{},
    extend: {},
    screens: {
      'tablet': '601px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1025px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

  },
  plugins: [
    require('@tailwindcss/forms')
    ,require('preline/plugin'),
    require('flowbite/plugin'),
    require('daisyui'),
  ],
  daisyui:{
  },
}


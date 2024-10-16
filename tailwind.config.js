/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./index.html","./node_modules/**/*.{js,ts,jsx,tsx}", 'node_modules/preline/dist/*.js',"./node_modules/flowbite/dist/*.js"],
  theme: {
    colors:{},
    extend: {},
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


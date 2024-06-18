/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navColor: "#003c3c",
        buttonBg:"#ffa500",
        buttomHover:"#8B5CF6"
      },
      screen:{
        'sm': '640px',
      }
    },
  },
  daisyui: {
    themes: ["light",],
  },
  plugins: [
    require('daisyui'),
  ],
}
// module.exports = {
//     theme: {
//       screens: {
//         'tablet': '640px',
//         'laptop': '1024px',
//         'desktop': '1280px',
//         'sm': '640px',
//         'md': '768px',
//         'lg': '1024px',
//         'xl': '1280px',
//         '2xl': '1536px',
//     },
//   }
// }


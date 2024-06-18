/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
'barlow':"url(./src/Font/Barlow-Bold.ttf)"
    },
    screens:{
      mobile: {'max': '640px'},
      md:{"max":"657px"}
    }
    ,
    extend: {

      colors :{
        greyBlue :"#202b3b",
        backBlue :'#0b131e',
        textGrey:"#9399a2",
        btnBlue :"#0095ff"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        sxxs: "255px",
        sxs: "265px",
        sxs1: "275px",
        sxs2: "285px",
        sxs3: "295px",
        ss: "305px",
        ss1: "315px",
        ss2: "325px",
        ss3: "335px",
        ss4: "345px",
        dxs: "375px",
        xxs: "405px",
        xxs1: "425px",
        sm1: "480px",
        sm4: "508px",
        sm2: "538px",
        sm3: "550px",
        sm: "640px",
        md: "768px",
        md1: "870px",
        md2: "914px",
        md3: "936px",
        lg: "976px",
        dlg: "1024px",
        lg1: "1100px",
        lgx: "1134px",
        dxl: "1280px",
        xl: "1440px",
        xl2: "1600px",
        xll: "1700px"
      },
    },
  },
  plugins: [],
}
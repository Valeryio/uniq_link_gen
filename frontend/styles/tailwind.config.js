/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}", "./*.html"],
    theme: {
      extend: {
        fontFamily: {
          syne: ["Syne", "sans-serif"]
        },
        fontSize: {
          "demi": '.5rem',
          base: '14px',
          h1: '3rem',
          p: '1.2rem',
          "1.5r": "1.5rem",
          "2r": "2rem",
          "3r": "3rem",
          "4r": "4rem",
          "5r": "5rem",
          "6r": "6rem",
          "7r": "7rem",
          "8r": "8rem",
          "9r": "9rem"
        },
        spacing: {
          "lgo": "7.5rem",
          "2r": "2rem",
          "3r": "3rem",
          "4r": "4rem",
          "5r": "5rem",
          "6r": "6rem",
          "7r": "7rem",
          "7.5r": "7.5rem",
          "8r": "8rem",
          "9r": "9rem",
          "10r": "10rem",
          "12r": "12rem",
          "16r": "16rem",
          "18r": "18rem",
          "20r": "20rem",
          "24r": "24rem",
          "28r": "28rem",
          "32r": "32rem",
          "40r": "40rem",
          "48r": "48rem",
          "56r": "56rem",
          "60r": "60rem",
          "64r": "64rem",
          "70r": "70rem",
          "72r": "72rem",
          "75r": "75rem",
          "80r": "80rem",
          "84r": "84rem",
          "88r": "88rem",
          "96r": "96rem",
          "w-var": "minmax(250px, 800px)"
        },
        borderRadius: {
          "c-32": "2rem"
        },
        colors: {
          "c-orange": {
            50: '#',
            100: '#FF9142',
          },
          "c-black": {
            25: "#696969",
            50: "#262A2C",
            100: "#1A1A1A"
          },
          "c-white": {
            25: "rgb(225, 225, 225, 0.25)",
            50: "rgb(225, 225, 225, 0.55)",
            75: "rgb(225, 225, 225, 0.75)"
          },
        },
        gridTemplateColumns: {
            // Simple 16 row grid
            "contact-grid": "auto 40rem",
            "r-img-colgrid": "repeat(2, 1fr)",
            // "r-auto": "repeat(auto-fit, minmax(300px, 1fr))",
            "r-auto": "repeat(auto-fit, minmax(20rem, 32rem))",
            'main-col': '19rem 1fr',
            'main-row': '1fr',
            'c-3': 'repeat(3, 3fr)',
  
          },
          gridTemplateRows: {
            "r-img-rowgrid": "repeat(2, 1fr)",
            'r-3': 'repeat(3, 1fr)',
            'r-4': 'repeat(4, 1fr)'
          }
      },
    },
    plugins: [],
  }
  
  
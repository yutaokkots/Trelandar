/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "src/**/*.{jsx,js}", "./node_modules/flowbite-react/**/*.{jsx,js}"],
  theme: {
    extend: {  
      backdropBlur: {
      'customsm': '2.0px',
  
    }
  },
    patterns: {
      opacities: {
          100: "1",
          80: ".80",
          60: ".60",
          40: ".40",
          20: ".20",
          10: ".10",
          5: ".05",
      },
      sizes: {
          1: "0.25rem",
          2: "0.5rem",
          4: "1rem",
          6: "1.5rem",
          8: "2rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          32: "8rem",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-filters'),
    require('tailwindcss-bg-patterns')
  ],
}


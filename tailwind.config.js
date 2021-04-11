module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          darkest: "#00204D",
          darker: "#126E8F",
          dark: "#2287AC",
          DEFAULT: "#35AFDA",
          light: "#75DCFD",
        },
        red: {
          light: "#F4474B",
          dark: "#BE272C",
        },
        gray: {
          darkest: "#00160A",
          darker: "#333333",
          dark: "#4F4F4F",
          DEFAULT: "#828282",
          light: "#BDBDBD",
          lighter: "#E0E0E0",
          lightest: "#F2F2F2",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C1B1B",
        secondary: "#EEEEEE",
        tertiary: "#F1F1F1",
        others: "#DD5A5A",
      },
    },
    fontFamily: {
      mlight: ["Manrope-Light"],
      mregular: ["Manrope-Regular"],
      mmedium: ["Manrope-Medium"],
      mbold: ["Manrope-Bold"],
      msbold: ["Manrope-SemiBold"],
      mebold: ["Manrope-ExtraBold"],
    },
  },
  plugins: [],
};

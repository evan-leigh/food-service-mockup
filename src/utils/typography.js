import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.8,
  
  headerFontFamily: ["Epilogue", "sans-serif"],
  bodyFontFamily: ["Poppins", "sans-serif"],
  headerWeight: "900",

  overrideStyles: ({adjustFontSizeTo}, option, styles) => ({
    h1: {
      ...adjustFontSizeTo('45px'),
    },
    bodyFontFamily: {
      baseLineHeight: 2.4
    }
  }),
  
  googleFonts: [
    {
      name: 'Epilogue',
      styles: [
        '900',
      ],
    },
    {
      name: 'Poppins',
      styles: [
        '400',
        '500',
        '600',
        '700',
      ],
    },
  ],

})
export default typography
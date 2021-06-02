import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.8,
  
  headerFontFamily: [
    "Epilogue",
    "sans-serif",
  ],
  bodyFontFamily: ["Poppins", "sans-serif"],

  overrideStyles: ({adjustFontSizeTo}, option, styles) => ({
    h1: {
      ...adjustFontSizeTo('45px')
    },
    bodyFontFamily: {
      baseLineHeight: 2.4
    }
  })
})
export default typography
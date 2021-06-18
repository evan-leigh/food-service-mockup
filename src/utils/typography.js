import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.8,

  headerFontFamily: ['Epilogue', 'sans-serif'],
  bodyFontFamily: ['Poppins', 'sans-serif'],
  headerWeight: '900',
  blockMarginBottom: '0',
  includeNormalize: false,

  overrideStyles: ({adjustFontSizeTo}) => ({
    h1: {
      ...adjustFontSizeTo('45px'),
    },
    h2: {
      ...adjustFontSizeTo('39px'),
    },
    h3: {
      ...adjustFontSizeTo('32px'),
    },


    bodyFontFamily: {
      baseLineHeight: 2.4,
    },
  }),
})
export default typography

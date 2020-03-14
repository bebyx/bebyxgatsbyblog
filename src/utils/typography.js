import Typography from "typography"
import noriegaTheme from "typography-theme-noriega"

noriegaTheme.baseFontSize = '21px'
noriegaTheme.scaleRatio = 3.00
noriegaTheme.headerFontFamily = ['Helvetica', 'sans-serif']


const typography = new Typography(noriegaTheme)

export const { scale, rhythm, options } = typography
export default typography

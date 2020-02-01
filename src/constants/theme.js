import { lightBlue, orange } from "@material-ui/core/colors"
import { responsiveFontSizes, createMuiTheme } from "@material-ui/core"

const HeadingFamily = "Poppins"
const BodyFamily = "Poppins"

const normalFonts = [
  BodyFamily,
  HeadingFamily,
  "Roboto",
  '"Helvetica Neue"',
  '"Segoe UI"',
  "Arial",
  "sans-serif",
].join(",")

const headingFonts = [
  HeadingFamily,
  BodyFamily,
  "Roboto",
  '"Helvetica Neue"',
  '"Segoe UI"',
  "Arial",
  "sans-serif",
].join(",")

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: orange[500],
      },
      secondary: {
        main: lightBlue[400],
      },
    },
    typography: {
      fontFamily: normalFonts,
      body1: {
        fontSize: "1.2rem",
      },
      body2: {
        fontSize: "1rem",
      },
      caption: {
        fontSize: "0.95rem",
        color: "rgba(255, 255, 255, 0.5)", // 'hint' text colour
        fontStyle: "italic",
      },
      h1: {
        fontSize: "4rem",
        fontWeight: "700",
        fontFamily: headingFonts,
        lineHeight: 1.1,
      },
      h2: {
        fontSize: "3.65rem",
        fontWeight: "600",
        fontFamily: headingFonts,
        lineHeight: 1.1,
      },
      h3: {
        fontWeight: "500",
        fontFamily: headingFonts,
        lineHeight: 1.1,
      },
      h4: {
        fontWeight: "500",
        fontFamily: headingFonts,
        lineHeight: 1.1,
      },
      h5: {
        fontWeight: "500",
        fontFamily: headingFonts,
        lineHeight: 1.1,
      },
      h6: {
        fontWeight: "500",
        fontFamily: normalFonts,
        lineHeight: 1.1,
      },
      button: {
        fontFamily: normalFonts,
      },
    },
  }),
  { breakpoints: ["xs", "sm", "md", "lg", "xl"], factor: 2.25 }
)

export default theme

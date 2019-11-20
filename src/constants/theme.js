import { lightBlue, orange } from "@material-ui/core/colors"
import { responsiveFontSizes, createMuiTheme } from "@material-ui/core"

import "typeface-poppins"
import "typeface-fira-mono"

const normalFonts = [
  "Poppins",
  "Roboto",
  '"Helvetica Neue"',
  '"Segoe UI"',
  "Arial",
  "sans-serif",
].join(",")

const headingFonts = [
  "Poppins",
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
        letterSpacing: "0.5px", // improve readability
      },
      body2: {
        fontSize: "1rem",
        letterSpacing: "0.4px", // improve readability
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
      },
      h3: {
        fontWeight: "500",
        fontFamily: headingFonts,
      },
      h4: {
        fontWeight: "500",
        fontFamily: headingFonts,
      },
      h5: {
        fontWeight: "500",
        fontFamily: headingFonts,
      },
      h6: {
        fontWeight: "500",
        fontFamily: normalFonts,
      },
      button: {
        fontFamily: normalFonts,
      },
    },
  }),
  { breakpoints: ["xs", "sm", "md", "lg", "xl"], factor: 2.25 }
)

export default theme

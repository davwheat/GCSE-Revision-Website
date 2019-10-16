/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import useMediaQuery from "@material-ui/core/useMediaQuery"

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "@openfonts/lexend-deca_all"
import "typeface-work-sans"
import "typeface-fira-mono"

import "highlight.js"

import Header from "./header"
import {
  Box,
  createMuiTheme,
  MuiThemeProvider,
  Paper,
  responsiveFontSizes,
} from "@material-ui/core"

import GitHubIcon from "mdi-react/GithubCircleIcon"

import Link from "./Link"

import "./css/layout.css"
import { Body2 } from "./EasyText"
import { lightBlue, orange } from "@material-ui/core/colors"

const normalFonts = [
  "Lexend Deca",
  '"Work Sans"',
  "Roboto",
  '"Helvetica Neue"',
  '"Segoe UI"',
  "Arial",
  "sans-serif",
].join(",")

const headingFonts = [
  '"Work Sans"',
  "Lexend Deca",
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
        fontWeight: "600",
        fontFamily: headingFonts,
      },
      h2: {
        fontSize: "3rem",
        fontWeight: "bold",
        fontFamily: headingFonts,
      },
      h3: {
        fontFamily: headingFonts,
      },
      h4: {
        fontFamily: headingFonts,
      },
      h5: {
        fontFamily: headingFonts,
      },
      h6: {
        fontFamily: normalFonts,
      },
      button: {
        fontFamily: normalFonts,
      },
    },
  }),
  { breakpoints: ["xs", "sm", "md", "lg", "xl"], factor: 2.25 }
)

const Layout = ({ children, type }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const SmallScreen = useMediaQuery("(min-width:600px)")

  const FooterContent = (
    <>
      {SmallScreen ? (
        <Box textAlign="center">
          <Body2>
            &copy; {new Date().getFullYear()}
            {"   "}|{"   "}
            <Link to="https://github.com/davwheat" hasExternalLinkIcon={false}>
              <GitHubIcon size={20} className="footer-icon" />
              davwheat
            </Link>
          </Body2>
        </Box>
      ) : (
        <Box textAlign="center">
          <Body2 style={{ fontSize: 13 }}>
            &copy; {new Date().getFullYear()}
            {"   "}|{"   "}
            <Link to="https://github.com/davwheat" hasExternalLinkIcon={false}>
              <GitHubIcon size={18} className="footer-icon" />
              davwheat
            </Link>
          </Body2>
        </Box>
      )}
    </>
  )

  return (
    <MuiThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} type={type} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          marginBottom: theme.spacing(3),
          marginTop: theme.spacing(2),
        }}
      >
        <main>{children}</main>
      </div>

      {SmallScreen ? (
        <Paper
          component="footer"
          style={{
            position: "fixed",
            bottom: 0,
            padding: theme.spacing(1.5),
            paddingBottom: theme.spacing(1.75),
            width: "100vw",
          }}
          elevation={4}
        >
          {FooterContent}
        </Paper>
      ) : (
        <Paper
          component="footer"
          style={{
            position: "fixed",
            bottom: 0,
            padding: theme.spacing(1),
            paddingBottom: theme.spacing(1.25),
            width: "100vw",
          }}
          elevation={8}
        >
          {FooterContent}
        </Paper>
      )}
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["article", null]),
}

export default Layout

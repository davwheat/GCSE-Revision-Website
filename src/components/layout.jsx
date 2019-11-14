/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import CookieConsent from "react-cookie-consent"

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "@openfonts/lexend-deca_all"
import "typeface-poppins"
import "typeface-fira-mono"

import "highlight.js"

import Header from "./header"
import {
  Box,
  createMuiTheme,
  MuiThemeProvider,
  Paper,
  responsiveFontSizes,
  Button,
  useMediaQuery,
} from "@material-ui/core"

import GitHubIcon from "mdi-react/GithubCircleIcon"

import Link from "./Link"

import "./css/layout.css"
import { Body2 } from "./EasyText"
import { lightBlue, orange } from "@material-ui/core/colors"

const normalFonts = [
  "Lexend Deca",
  "Poppins",
  "Roboto",
  '"Helvetica Neue"',
  '"Segoe UI"',
  "Arial",
  "sans-serif",
].join(",")

const headingFonts = [
  "Poppins",
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
      <CookieConsent
        location="bottom"
        enableDeclineButton={false}
        buttonText="Sounds good!"
        cookieName="cookieConsent"
        style={{ background: "#2B373B" }}
        expires={365} // consent expires in one year
        // eslint-disable-next-line no-unused-vars
        ButtonComponent={({ children, style, ...props }) => {
          props["variant"] = "contained"
          props["color"] = "primary"
          props["style"] = { marginRight: theme.spacing() }

          return React.createElement(Button, props, children)
        }}
      >
        For this site to work properly, we need to store cookies on your device.{" "}
        <span style={{ fontSize: "10px" }}>
          <Link hasExternalLinkIcon={false} to="http://www.whatarecookies.com/">
            Learn more about cookies
          </Link>
        </span>
      </CookieConsent>
      <Header siteTitle={data.site.siteMetadata.title} type={type} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          marginBottom: theme.spacing(3),
          marginTop:
            type === "article" ? theme.spacing(4) - 3 : theme.spacing(4), // -3 for articles to account for scroll indicator
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

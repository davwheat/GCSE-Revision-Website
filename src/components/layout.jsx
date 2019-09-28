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

import "typeface-poppins"
import "typeface-work-sans"
import "typeface-fira-mono"

import Header from "./header"
import { Box, createMuiTheme, MuiThemeProvider, Paper } from "@material-ui/core"

import GitHubIcon from "mdi-react/GithubCircleIcon"

import Link from "./Link"

import "./layout.css"
import { Body2 } from "./EasyText"
import { lightBlue, orange } from "@material-ui/core/colors"

const theme = createMuiTheme({
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
    fontFamily: [
      "Poppins",
      '"Work Sans"',
      "Roboto",
      '"Helvetica Neue"',
      '"Segoe UI"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: 64,
      fontWeight: "600",
      fontFamily: [
        '"Work Sans"',
        "Poppins",
        "Roboto",
        '"Helvetica Neue"',
        '"Segoe UI"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
    h2: {
      fontSize: 48,
      fontWeight: "bold",
      fontFamily: [
        '"Work Sans"',
        "Poppins",
        "Roboto",
        '"Helvetica Neue"',
        '"Segoe UI"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
    h3: {
      fontFamily: [
        '"Work Sans"',
        "Poppins",
        "Roboto",
        '"Helvetica Neue"',
        '"Segoe UI"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
    h4: {
      fontFamily: [
        '"Work Sans"',
        "Poppins",
        "Roboto",
        '"Helvetica Neue"',
        '"Segoe UI"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
    h5: {
      fontFamily: [
        '"Work Sans"',
        "Poppins",
        "Roboto",
        '"Helvetica Neue"',
        '"Segoe UI"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
    h6: {
      fontFamily: [
        "Poppins",
        '"Work Sans"',
        "Roboto",
        '"Helvetica Neue"',
        '"Segoe UI"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  },
})

const Layout = ({ children }) => {
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
            <Link to="https://github.com/davwheat">
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
            <Link to="https://github.com/davwheat">
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          marginBottom: theme.spacing(3),
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
}

export default Layout

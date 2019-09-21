/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "typeface-poppins"

import Header from "./header"
import { Box, createMuiTheme, MuiThemeProvider, Paper } from "@material-ui/core"

import GitHubIcon from "mdi-react/GithubCircleIcon"

import Link from "./Link"

import "./layout.css"
import { Body2 } from "./EasyText"

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FF9800",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      '"Segoe UI"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: 64,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 48,
      fontWeight: "bold",
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

  return (
    <MuiThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
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
      </Paper>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

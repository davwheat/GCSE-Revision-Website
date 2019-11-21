/* eslint-disable react/display-name */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import CookieConsent from "react-cookie-consent"

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import theme from "../constants/theme"

import "highlight.js"

import Header from "./header"
import {
  Box,
  MuiThemeProvider,
  Paper,
  Button,
  useMediaQuery,
  Container,
  IconButton,
} from "@material-ui/core"

import GitHubIcon from "mdi-react/GithubCircleIcon"
import CloseIcon from "mdi-react/CloseIcon"

import Link from "./Link"

import "./css/layout.css"
import { Body2 } from "./EasyText"

import { SnackbarProvider, useSnackbar } from "notistack"

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

  const notistackRef = React.createRef()
  const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key)
  }

  const LargeScreen = useMediaQuery("(min-width:600px)")

  const FooterContent = (
    <>
      {LargeScreen ? (
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
        <Container maxWidth="md">
          <SnackbarProvider
            preventDuplicate
            maxSnack={3}
            autoHideDuration={5000}
            dense={!LargeScreen}
            ref={notistackRef}
            action={key => (
              <IconButton
                aria-label="Dismiss notification"
                onClick={onClickDismiss(key)}
                size="small"
                color="inherit"
              >
                <CloseIcon />
              </IconButton>
            )}
          >
            <ServiceWorkerUpdate />
            <Box component="main">{children}</Box>
          </SnackbarProvider>
        </Container>
      </div>

      {LargeScreen ? (
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

const ServiceWorkerUpdate = () => {
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (window.IsWorkerUpdateAvailable === true) {
      window.onServiceWorkerUpdateReady = () => {
        enqueueSnackbar(`This site has been updated.`, {
          action: () => (
            <Button
              aria-label="Refresh page"
              onClick={() => {
                window.location.reload()
              }}
              color="inherit"
            >
              Refresh
            </Button>
          ),
          persist: true,
          variant: "info",
        })
      }
    }
  })

  return <span style={{ display: "none" }} />
}

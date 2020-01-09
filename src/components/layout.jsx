/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import CookieConsent from "react-cookie-consent"

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Cookies from "js-cookie"

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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core"

import GitHubIcon from "mdi-react/GithubCircleIcon"
import CloseIcon from "mdi-react/CloseIcon"

import Link from "./Link"

import "./css/layout.css"
import { Body2 } from "./EasyText"

import { SnackbarProvider, useSnackbar } from "notistack"

import { useFirebase } from "gatsby-plugin-firebase"

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

  const [Firebase, setFirebase] = useState(null)

  useFirebase(firebase => {
    setFirebase(firebase)
  })

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
            <NotificationPermission Firebase={Firebase} />
            <Box component="main">{children}</Box>
            <div id="ezoic-pub-ad-placeholder-101" />
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
            zIndex: 99,
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
            zIndex: 99,
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

const NotificationPermission = ({ Firebase }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [Open, setOpen] = useState(false)

  const getToken = async () => {
    const FCM = Firebase ? Firebase.messaging() : null

    const token = await FCM.getToken()

    if (!token) {
      try {
        await FCM.requestPermission(p => {
          // If the user accepts, let's create a notification
          if (p === "granted") {
            enqueueSnackbar()
          }
        })
        const token = await FCM.getToken()

        return token
      } catch (error) {
        console.error(error)
      }
    }
  }

  if (Firebase) {
    if (Firebase.messaging.isSupported()) {
      if (!["granted", "denied"].includes(Notification.permission)) {
        let d = new Date()
        
        if (
          localStorage.getItem("push-notifications-denied") <
          d.setDate(d.getDate() - 28)
        ) {
          enqueueSnackbar(
            `Want to get notified about new content and features?`,
            {
              action: key => {
                return (
                  <Button
                    aria-label="Learn more"
                    onClick={() => {
                      closeSnackbar(key)
                      showDialog()
                    }}
                    color="inherit"
                  >
                    Learn more
                  </Button>
                )
              },
              persist: true,
              variant: "info",
            }
          )
        }
      } else if (Notification.permission !== "denied") {
        const FCM = Firebase ? Firebase.messaging() : null

        // Callback fired if Instance ID token is updated.
        FCM &&
          FCM.onTokenRefresh(async () => {
            console.info("Token refreshed.")
            await getToken()
          })

        Firebase.analytics().setUserProperties({ allowed_notifications: "yes" })

        getToken()
      } else {
        Firebase.analytics().setUserProperties({ allowed_notifications: "no" })
      }
    } else {
      console.warn(
        "You're using a terrible browser that doesn't support the web's notification standard. SHAME! SHAME! SHAME! https://www.youtube.com/watch?v=SrDSqODtEFM"
      )
    }
  }

  let snackbarKey

  const showDialog = () => {
    let d = new Date()

    if (
      localStorage.getItem("push-notifications-denied") <
      d.setDate(d.getDate() - 28)
    ) {
      setOpen(true)
    }
  }

  const hideDialog = () => {
    setOpen(false)
  }

  const acceptNotifications = () => {
    hideDialog()
    getToken()
  }

  const rejectNotifications = () => {
    localStorage.setItem(
      "push-notifications-denied",
      new Date().getMilliseconds()
    )
    hideDialog()
    // hideNotificationDialog()
  }

  return (
    <Dialog
      open={Open}
      onClose={() => {}}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="alert-dialog-title"
        style={{ marginTop: theme.spacing() }}
      >
        {`Enable notifications?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Enabling notifications allows us to notify you when new content or
          features are available, or if we want your feedback about something.
          <br />
          <br />
          You in?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={rejectNotifications}
          color="default"
          variant="text"
          autoFocus
        >
          No, I&apos;m a loser.
        </Button>
        <Button
          onClick={acceptNotifications}
          color="primary"
          variant="contained"
          autoFocus
        >
          Yeah!
        </Button>
      </DialogActions>
    </Dialog>
  )
}

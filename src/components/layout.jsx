/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import CookieConsent from "react-cookie-consent"

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Cookies from "js-cookie"

import theme from "../constants/theme"

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
  makeStyles,
} from "@material-ui/core"

import GitHubIcon from "mdi-react/GithubCircleIcon"
import CloseIcon from "mdi-react/CloseIcon"

import Link from "./Link"

import "./css/layout.css"
import { Body2 } from "./EasyText"

import { SnackbarProvider, useSnackbar } from "notistack"

import { useFirebase } from "gatsby-plugin-firebase"
import { PerformanceTest } from "../functions/performanceTest"

import cssVars from "css-vars-ponyfill"
import UpdateMessage from "./UpdateMessage"

const layoutStyles = makeStyles(theme => ({
  page: {
    margin: `0 auto`,
    padding: `0px 1.0875rem 1.45rem`,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    background: theme.palette.background.default,
  },
}))

const Layout = ({ children, type }) => {
  cssVars({
    watch: true,
  })

  /*

 Run performance test on first load of site
 ------------------------------------------
 This is used to determine whether page
 transitions should be used, along with a
 multitude of other possibilities.

 The resulting performance is stored as a
 cookie named "performance" as one of these:
 "low", "medium", or "high".

 The value will be recalculated every 28 days,
 as the cookie expires.

  */

  useEffect(() => {
    if (!Cookies.get("performance")) {
      Cookies.set("performance", PerformanceTest(), { expires: 28 })
    }
  })

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

  if (Firebase) {
    Firebase.analytics().logEvent("app_rendered")
    Firebase.performance()
  }

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

  const [OverrideNotificationPopup, setOverrideNotificationPopup] = useState(
    false
  )

  return (
    <React.StrictMode>
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
          For this site to work properly, we need to store cookies on your
          device.{" "}
          <span style={{ fontSize: "10px" }}>
            <Link
              hasExternalLinkIcon={false}
              to="http://www.whatarecookies.com/"
            >
              Learn more about cookies
            </Link>
          </span>
        </CookieConsent>
        <Header
          siteTitle={data.site.siteMetadata.title}
          type={type}
          overrideNotificationPopup={() => {
            setOverrideNotificationPopup(true)
          }}
        />

        <PageContents type={type}>
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
              <NotificationPermission
                Firebase={Firebase}
                override={OverrideNotificationPopup}
                resetOverride={() => {
                  setOverrideNotificationPopup(false)
                }}
              />
              <Box component="main">{children}</Box>
              <UpdateMessage />
            </SnackbarProvider>
          </Container>
        </PageContents>

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
    </React.StrictMode>
  )
}

const PageContents = ({ type, children }) => {
  const classes = layoutStyles()
  return <div className={classes.page}>{children}</div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["article", null]),
}

export default Layout

const NotificationPermission = ({ Firebase, override, resetOverride }) => {
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

  const overrideNotificationPopup = () => {
    if (Notification.permission === "denied") {
      enqueueSnackbar(
        `You've denied the notification permission: tap the padlock at the top of your screen, select 'Site Settings', then set Notifications to 'Allow'.`,
        { variant: "error", persist: false, action: null }
      )
      resetOverride()
      return
    } else if (Notification.permission === "granted") {
      enqueueSnackbar(
        `You've already allowed push notifications for our site.`,
        {
          variant: "success",
          persist: false,
          action: null,
        }
      )
      resetOverride()
      return
    } else if (!Firebase.messaging.isSupported()) {
      enqueueSnackbar(`Your browser doesn't support push notifications.`, {
        variant: "info",
        persist: false,
        action: null,
      })
      resetOverride()
      return
    }

    localStorage.removeItem("push-notifications-denied")
    resetOverride()
  }

  const showDialog = () => {
    let d = new Date()

    if (
      localStorage.getItem("push-notifications-denied") <
      d.setDate(d.getDate() - 28)
    ) {
      localStorage.removeItem("push-notifications-denied")
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
    localStorage.setItem("push-notifications-denied", new Date().getTime())
    hideDialog()
    // hideNotificationDialog()
  }

  if (Firebase) {
    if (override) {
      overrideNotificationPopup()
      return null
    }

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
      Firebase.analytics().setUserProperties({
        allowed_notifications: "unsupported",
      })
    }
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
          If you enable notifications, you&apos;ll get a message on this device
          whenever we release new content, before key dates, or if we want your
          feedback about something.
          <br />
          <br />
          You in? We won&apos;t spam you!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={rejectNotifications} color="default" variant="text">
          No thanks
        </Button>
        <Button
          onClick={acceptNotifications}
          color="primary"
          variant="contained"
          autoFocus
        >
          Hell yeah!
        </Button>
      </DialogActions>
    </Dialog>
  )
}

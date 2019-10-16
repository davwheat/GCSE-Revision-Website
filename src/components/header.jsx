import PropTypes from "prop-types"
import React, { useEffect } from "react"

import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@material-ui/core"

import { H6 } from "./EasyText"
import Link from "./Link"

import MenuIcon from "mdi-react/HamburgerMenuIcon"

import CssBaseline from "@material-ui/core/CssBaseline"

import { MenuItems } from "../constants"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  navbar: {
    minWidth: 250,
  },
  withScrollIndicator: {
    position: "sticky",
    marginTop: -32,
    top: 0,
    display: "block",
    zIndex: 1001,
    height: 3,
    background: theme.palette.secondary.dark,
    width: "100vw",
    overflow: "hidden",
    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      top: 0,
      height: 3,
      width: "1rem", // initial size
      background: theme.palette.secondary.main,
    },
  },
}))

const Header = ({ pageTitle, type }) => {
  const classes = useStyles()

  useEffect(() => {
    if (type === "article") {
      const styleElem = document.head.appendChild(
        document.createElement("style")
      )

      window.addEventListener("scroll", () => {
        let h = document.documentElement,
          b = document.body,
          st = "scrollTop",
          sh = "scrollHeight"

        let scrollPercentage =
          ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100

        styleElem.innerHTML = `#scrollIndicator:after {
          width: calc(${scrollPercentage}% + 1rem);
        }`
      })
    }
  })

  return (
    <>
      <CssBaseline />
      <MakeAppBar title={pageTitle} />

      {type === "article" ? (
        <Box
          boxShadow={1}
          id="scrollIndicator"
          className={classes.withScrollIndicator}
        />
      ) : null}
    </>
  )
}

const MakeAppBar = ({ title }) => {
  const classes = useStyles()

  const [state, setState] = React.useState({
    isDrawerOpen: false,
  })

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, isDrawerOpen: open })
  }

  const iOS =
    typeof process !== "undefined"
      ? process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
      : false

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            key={0}
          >
            <MenuIcon />
          </IconButton>
          <H6 key={1} className={classes.title}>
            {title}
          </H6>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={state.isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <nav
          className={classes.navbar}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {MenuItems.map((groups, i) => (
            <>
              <List key={i}>
                {groups.map(items => (
                  <ListItem
                    component={Link}
                    to={items.href}
                    button
                    key={items.text}
                  >
                    <ListItemIcon>{items.icon}</ListItemIcon>
                    <ListItemText primary={items.text} />
                  </ListItem>
                ))}
              </List>
              {i + 1 !== MenuItems.length ? <Divider key={i + 0.5} /> : null}
            </>
          ))}
        </nav>
      </SwipeableDrawer>
    </div>
  )
}

MakeAppBar.propTypes = {
  title: PropTypes.string,
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  pageTitle: PropTypes.string,
  type: PropTypes.oneOf(["article", null]),
}

Header.defaultProps = {
  siteTitle: ``,
  pageTitle: `GCSE Revision`,
}

export default Header

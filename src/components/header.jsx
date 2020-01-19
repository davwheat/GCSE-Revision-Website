import PropTypes from "prop-types"
import React, { useEffect, useState, useRef } from "react"

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
  Collapse,
  useTheme,
  Box,
  Tooltip,
  useScrollTrigger,
  Slide,
} from "@material-ui/core"

import { H6 } from "./EasyText"
import Link from "./Link"

import MenuIcon from "mdi-react/HamburgerMenuIcon"
import ExpandMoreIcon from "mdi-react/ChevronDownIcon"
import ExpandLessIcon from "mdi-react/ChevronUpIcon"
import BellOutlineIcon from "mdi-react/BellOutlineIcon"

import CssBaseline from "@material-ui/core/CssBaseline"

import { MenuItems } from "../constants"
import { IsMediumPerformanceOrWorse } from "../functions/performanceTest"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
  headRoot: {
    "& #scrollIndicator": {
      top: 0,
      display: "block",
      zIndex: 1001,
      height: 3,
      background: theme.palette.secondary.dark,
      position: "fixed",
      width: "100vw",
      overflow: "hidden",
      transform: "translateY(64px)",
      transition: theme.transitions.create("transform", { duration: 225 }),
      [theme.breakpoints.down("xs")]: {
        transform: "translateY(56px)",
      },
      "&:after": {
        content: "''",
        display: "block",
        top: 0,
        height: 3,
        width: "calc(var(--scroll-percentage) + 1rem)",
        background: theme.palette.secondary.main,
      },
    },
    "& header[style*='transform: '][style*='px'] ~ #scrollIndicator": {
      transform: "translateY(0px)",
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const Header = ({ pageTitle, type, overrideNotificationPopup }) => {
  return (
    <>
      <CssBaseline />
      <MakeAppBar
        overrideNotificationPopup={overrideNotificationPopup}
        title={pageTitle}
        type={type}
      />
    </>
  )
}

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const MakeAppBar = ({ title, overrideNotificationPopup, type }) => {
  const classes = useStyles()

  const [state, setState] = React.useState({
    isDrawerOpen: false,
  })

  const scrollIndicatorRef = useRef(null)

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

  const onScroll = () => {
    let h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight"

    let scrollPercentage =
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100

    scrollIndicatorRef &&
      scrollIndicatorRef.current.style.setProperty(
        "--scroll-percentage",
        scrollPercentage + "%"
      )
  }

  useEffect(() => {
    if (type === "article") {
      window.removeEventListener("scroll", onScroll)

      window.addEventListener("scroll", onScroll, { passive: true })

      scrollIndicatorRef &&
        scrollIndicatorRef.current.style.setProperty(
          "--scroll-percentage",
          "0%"
        )
    }
  })

  return (
    <div className={classes.root}>
      <div className={classes.headRoot}>
        <HideOnScroll>
          <AppBar className={classes.appbar}>
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
              <Tooltip title="Enable notifications">
                <IconButton onClick={overrideNotificationPopup}>
                  <BellOutlineIcon color="black" />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        {type === "article" ? (
          <Box
            boxShadow={1}
            className={classes.scrollIndicator}
            id="scrollIndicator"
            ref={scrollIndicatorRef}
          />
        ) : null}
      </div>
      <Toolbar />

      <SwipeableDrawer
        open={state.isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={IsMediumPerformanceOrWorse}
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
                {groups.map((items, i) => (
                  <DrawerMenuItem key={i} item={items} />
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

const DrawerMenuItem = ({ item: itemProp }) => {
  const classes = useStyles()
  const theme = useTheme()

  const hasSubitems = typeof itemProp.subitems !== "undefined"
  const [expanded, setExpanded] = useState(false)

  const handleClick = event => {
    setExpanded(!expanded)

    event.stopPropagation()
  }

  return (
    <>
      <ListItem
        component={hasSubitems ? null : Link}
        to={hasSubitems ? null : itemProp.href}
        onClick={hasSubitems ? handleClick : null}
        button
        key={itemProp.text + itemProp.href}
      >
        <ListItemIcon>{itemProp.icon}</ListItemIcon>
        <ListItemText
          style={{ color: theme.palette.primary.main }}
          primary={itemProp.text}
        />

        {hasSubitems ? (
          expanded ? (
            <ExpandLessIcon />
          ) : (
            <ExpandMoreIcon />
          )
        ) : null}
      </ListItem>
      {hasSubitems ? (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {itemProp.subitems.map(item => (
              <ListItem
                className={classes.nested}
                component={Link}
                to={item.href}
                button
                key={item.text + itemProp.href}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      ) : null}
    </>
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
  pageTitle: `GCSE: Revise It!`,
}

DrawerMenuItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    subitems: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
        href: PropTypes.string.isRequired,
      })
    ),
  }),
}

export default Header

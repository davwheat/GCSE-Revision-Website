import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

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
} from "@material-ui/core"

import { H6 } from "./EasyText"
import Link from "./Link"

import MenuIcon from "mdi-react/HamburgerMenuIcon"
import ExpandMoreIcon from "mdi-react/ChevronDownIcon"
import ExpandLessIcon from "mdi-react/ChevronUpIcon"

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
  nested: {
    paddingLeft: theme.spacing(4),
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
  pageTitle: `GCSE Revision`,
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

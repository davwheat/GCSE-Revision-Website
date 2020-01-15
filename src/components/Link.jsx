import React from "react"
import PropTypes from "prop-types"

import {
  Link as MatLink,
  Button,
  makeStyles,
  useTheme,
} from "@material-ui/core"

import GatsbyLink from "gatsby-plugin-transition-link/AniLink"

import AnchorLink from "react-anchor-link-smooth-scroll"

import ExternalLinkIcon from "mdi-react/ExternalLinkIcon"

// eslint-disable-next-line react/display-name
const AdapterLink = React.forwardRef((props, ref) => (
  <GatsbyLink
    style={{ textDecoration: "none !important" }}
    innerRef={ref}
    cover
    duration={1}
    bg="#ff9800"
    {...props}
  />
))

const styles = makeStyles(() => ({
  externalLinkIcon: {
    display: "inline-block",
    marginBottom: 2,
  },
}))

const Link = props => {
  const {
    to,
    children,
    linkIsButton,
    hasExternalLinkIcon,
    inheritColor,
    ...newprops
  } = props

  const classes = styles()
  const theme = useTheme()

  const AnchorOffset = 32

  if (
    to.startsWith("https://") ||
    to.startsWith("http://") ||
    to.startsWith("//")
  ) {
    if (linkIsButton === true) {
      return (
        <Button
          href={to}
          color={inheritColor ? "inherit" : "primary"}
          component="a"
          {...newprops}
          target="_blank"
          rel="noopener"
          endIcon={
            hasExternalLinkIcon ? (
              <ExternalLinkIcon
                size={14}
                className={classes.externalLinkIcon}
              />
            ) : null
          }
        >
          {children}
        </Button>
      )
    } else {
      let url = to

      if (url.match(/(?:[/dp/]|$)([A-Z0-9]{10})/)) {
        url = `https://www.amazon.co.uk/gp/product/${url
          .match(/(?:[/dp/]|$)([A-Z0-9]{10})/)[0]
          .substr(
            1
          )}/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=${url
          .match(/(?:[/dp/]|$)([A-Z0-9]{10})/)[0]
          .substr(
            1
          )}&linkCode=as2&tag=wheatleywebse-21&linkId=b464328f449dbfe39206c55a2828121b`
      }

      return (
        <MatLink
          color={inheritColor ? "inherit" : "primary"}
          href={url}
          {...newprops}
          target="_blank"
          rel="noopener"
          component="a"
        >
          {children}
          {hasExternalLinkIcon ? (
            <ExternalLinkIcon size={14} className={classes.externalLinkIcon} />
          ) : null}
        </MatLink>
      )
    }
  } else if (to.startsWith("#")) {
    if (linkIsButton === true) {
      return (
        <Button
          color={inheritColor ? "inherit" : "primary"}
          component={AnchorLink}
          offset={AnchorOffset}
          href={to}
          {...newprops}
          target="_blank"
          rel="noopener"
        >
          {children}
        </Button>
      )
    } else {
      return (
        <AnchorLink
          style={{ color: inheritColor ? null : theme.palette.primary.main }}
          offset={AnchorOffset}
          href={to}
          {...newprops}
        >
          {children}
        </AnchorLink>
      )
    }
  } else {
    if (linkIsButton === true) {
      if (to.startsWith("/")) {
        return (
          <Button
            color={inheritColor ? "inherit" : "primary"}
            component="a"
            href={to}
            {...newprops}
          >
            {children}
          </Button>
        )
      } else {
        return (
          <Button
            color={inheritColor ? "inherit" : "primary"}
            component={AdapterLink}
            to={`/` + to}
            {...newprops}
          >
            {children}
          </Button>
        )
      }
    } else {
      if (to.startsWith("/")) {
        return (
          <MatLink
            color={inheritColor ? "inherit" : "primary"}
            component="a"
            href={to}
            {...newprops}
          >
            {children}
          </MatLink>
        )
      } else {
        return (
          <MatLink
            color={inheritColor ? "inherit" : "primary"}
            component={AdapterLink}
            to={`/` + to}
            {...newprops}
          >
            {children}
          </MatLink>
        )
      }
    }
  }
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  linkIsButton: PropTypes.bool,
  hasExternalLinkIcon: PropTypes.bool,
}

Link.defaultProps = {
  hasExternalLinkIcon: true,
}

export default Link

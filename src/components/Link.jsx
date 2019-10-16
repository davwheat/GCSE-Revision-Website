import React from "react"
import PropTypes from "prop-types"

import {
  Link as MatLink,
  Button,
  makeStyles,
  useTheme,
} from "@material-ui/core"
import { Link as GatsbyLink } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll-hashchange"

import ExternalLinkIcon from "mdi-react/ExternalLinkIcon"

// eslint-disable-next-line react/display-name
const AdapterLink = React.forwardRef((props, ref) => (
  <GatsbyLink
    style={{ textDecoration: "none !important" }}
    innerRef={ref}
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
  const { to, children, linkIsButton, hasExternalLinkIcon, ...newprops } = props

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
      return (
        <MatLink href={to} {...newprops} target="_blank" rel="noopener">
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
      console.log(props)

      return (
        <AnchorLink
          style={{ color: theme.palette.primary.main }}
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
      return (
        <Button component={AdapterLink} to={to} {...newprops}>
          {children}
        </Button>
      )
    } else {
      return (
        <MatLink component={GatsbyLink} to={to} {...newprops}>
          {children}
        </MatLink>
      )
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

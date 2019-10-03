import React from "react"
import PropTypes from "prop-types"
import { Link as MatLink, Button, makeStyles } from "@material-ui/core"
import { Link as GatsbyLink } from "gatsby"

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
  const { to, children, button, ...newprops } = props
  if (
    to.startsWith("https://") ||
    to.startsWith("http://") ||
    to.startsWith("//")
  ) {
    const classes = styles()
    if (button === true) {
      return (
        <Button href={to} {...newprops} target="_blank" rel="noopener">
          {children}
          {props.hasExternalLinkIcon ? <ExternalLinkIcon /> : null}
        </Button>
      )
    } else {
      return (
        <MatLink href={to} {...newprops} target="_blank" rel="noopener">
          {children}
          {props.hasExternalLinkIcon ? (
            <ExternalLinkIcon size={14} className={classes.externalLinkIcon} />
          ) : null}
        </MatLink>
      )
    }
  } else {
    if (button === true) {
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
  button: PropTypes.bool,
  hasExternalLinkIcon: PropTypes.bool,
}

Link.defaultProps = {
  hasExternalLinkIcon: true,
}

export default Link

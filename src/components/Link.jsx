import React from "react"
import PropTypes from "prop-types"
import { Link as MatLink, Button } from "@material-ui/core"
import { Link as GatsbyLink } from "gatsby"

// eslint-disable-next-line react/display-name
const AdapterLink = React.forwardRef((props, ref) => (
  <GatsbyLink
    style={{ textDecoration: "none !important" }}
    innerRef={ref}
    {...props}
  />
))

const Link = props => {
  const { to, children, button, ...newprops } = props
  if (
    to.startsWith("https://") ||
    to.startsWith("http://") ||
    to.startsWith("//")
  ) {
    if (button === true) {
      console.log("LOL: " + to)

      return (
        <Button href={to} {...newprops} target="_blank" rel="noopener">
          {children}
        </Button>
      )
    } else {
      return (
        <MatLink href={to} {...newprops} target="_blank" rel="noopener">
          {children}
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
}

export default Link

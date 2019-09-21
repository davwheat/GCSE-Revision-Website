import React from "react"
import PropTypes from "prop-types"
import { Link as MatLink } from "@material-ui/core"
import { Link as GatsbyLink } from "gatsby"

const Link = props => {
  const { to, children } = props
  if (
    to.startsWith("https://") ||
    to.startsWith("http://") ||
    to.startsWith("//")
  )
    return (
      <MatLink href={to} {...props} target="_blank">
        {children}
      </MatLink>
    )
  else
    return (
      <MatLink component={GatsbyLink} to={to} {...props}>
        {children}
      </MatLink>
    )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default Link

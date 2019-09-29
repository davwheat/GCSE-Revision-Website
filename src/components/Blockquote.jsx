import React from "react"
import PropTypes from "prop-types"

import { P2 } from "./EasyText"
import { makeStyles } from "@material-ui/core"

const Quote = props => {
  const { topMultiplier, bottomMultiplier } = props

  const classes = makeStyles(theme => ({
    quote: {
      borderLeft: `rgba(128, 128, 128, 0.6) ${theme.spacing(0.5)}px solid`,
      borderRadius: theme.spacing(0.5),
      background: `rgba(128, 128, 128, 0.2)`,
      margin: `${theme.spacing(topMultiplier)}px ${theme.spacing(
        4
      )}px ${theme.spacing(bottomMultiplier)}px`,
      padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px ${theme.spacing(
        0.5
      )}px`,
    },
  }))()

  return (
    <P2 component="blockquote" {...props} className={classes.quote} paragraph />
  )
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  topMultiplier: PropTypes.number,
  bottomMultiplier: PropTypes.number,
}

Quote.defaultProps = {
  topMultiplier: 0,
  bottomMultiplier: 2,
}

export default Quote

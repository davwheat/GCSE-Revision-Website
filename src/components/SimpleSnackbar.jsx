/* eslint-disable indent */
import React from "react"
import PropTypes from "prop-types"

import {
  makeStyles,
  Snackbar,
  SnackbarContent,
  IconButton,
  useTheme,
} from "@material-ui/core"
import { amber, green } from "@material-ui/core/colors"

import CloseIcon from "mdi-react/CloseIcon"

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
  error: {
    background: theme.palette.error.dark,
  },
  warning: {
    background: amber[700],
  },
  success: {
    background: green[600],
  },
  plain: {
    background: undefined,
  },
}))

const SimpleSnackbar = props => {
  const classes = useStyles()
  const { variant, message, showCloseButton, autoHide } = props

  const [open, setOpen] = React.useState(true)

  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  return open ? (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open
      autoHideDuration={autoHide === false ? null : 6000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classes[variant]}
        aria-describedby="message-id"
        message={<span id="message-id">{message}</span>}
        action={
          showCloseButton
            ? [
                <IconButton
                  key="close"
                  aria-label="close"
                  color="inherit"
                  className={classes.close}
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>,
              ]
            : null
        }
      />
    </Snackbar>
  ) : null
}

SimpleSnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  showCloseButton: PropTypes.bool,
  variant: PropTypes.oneOf(["error", "success", "warning", "plain"]),
  autoHide: PropTypes.bool,
}

export default SimpleSnackbar

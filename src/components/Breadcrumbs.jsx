import React from "react"
import PropTypes from "prop-types"

import { Paper, Breadcrumbs, makeStyles } from "@material-ui/core"

import NavigateNextIcon from "mdi-react/NavigateNextIcon"

import Link from "./Link"
import { P } from "./EasyText"

const CustomBreadcrumbs = ({ items }) => {
  const classes = makeStyles(theme => ({
    breadcrumb: {
      display: `inline-block`,
      maxWidth: "12ch",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      verticalAlign: "middle",
      marginTop: -2, // adjust for incline block baseline lowering with overflow hidden
    },
    paper: {
      padding: theme.spacing(1.5, 2.5),
      marginBottom: theme.spacing(4),
    },
  }))()

  return (
    <>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator={<NavigateNextIcon size="16" />}>
          {items.map((item, i) => {
            return i + 1 === items.length ? (
              <P color="primary" key={i}>
                {item.label}
              </P>
            ) : (
              <Link
                className={classes.breadcrumb}
                color="textSecondary"
                to={item.href}
                key={i}
              >
                {item.label}
              </Link>
            )
          })}
        </Breadcrumbs>
      </Paper>
    </>
  )
}

CustomBreadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    }).isRequired
  ),
}

export default CustomBreadcrumbs

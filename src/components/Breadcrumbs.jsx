import React from "react"
import PropTypes from "prop-types"

import { Divider, Breadcrumbs } from "@material-ui/core"

import Link from "./Link"
import { P } from "./EasyText"

const CustomBreadcrumbs = ({ items }) => {
  return (
    <>
      <Breadcrumbs>
        {items.map((item, i) => {
          return i + 1 === items.length ? (
            <P display="inline" color="primary" key={i}>
              {item.label}
            </P>
          ) : (
            <Link color="textSecondary" to={item.href} key={i}>
              {item.label}
            </Link>
          )
        })}
      </Breadcrumbs>
      <Divider variant="middle" style={{ marginBottom: 24, marginTop: 16 }} />
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

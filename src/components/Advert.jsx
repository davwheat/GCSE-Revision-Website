import React from "react"
import PropTypes from "prop-types"

const Advert = props => {
  return <div style={{ display: "none" }}></div>
}

Advert.propTypes = {
  type: PropTypes.oneOf(["banner"]),
}

Advert.defaultProps = {
  type: "banner",
}

export default Advert

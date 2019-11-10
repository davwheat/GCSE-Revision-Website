import React from "react"
import PropTypes from "prop-types"

import AdSense from "react-adsense-ad"

const Advert = props => {
  const { type } = props
  let slot = ""

  switch (type) {
    default:
    case "banner":
      slot = "4237027635"
      break
  }

  return (
    <AdSense.Google
      client="ca-pub-2701335557132384"
      slot={slot}
      format="auto"
      responsive="true"
    />
  )
}

Advert.propTypes = {
  type: PropTypes.oneOf(["banner"]),
}

Advert.defaultProps = {
  type: "banner",
}

export default Advert

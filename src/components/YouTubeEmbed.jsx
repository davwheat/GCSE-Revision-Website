import React from "react"
import PropTypes from "prop-types"

const YouTubeEmbed = ({ url }) => {
  const youtubeRegex = /^.*(youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/

  const youtubeId = url.match(youtubeRegex)[2]

  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        //paddingTop: 25,
        height: 0,
        transform: "translateZ(0)",
        width: "100%",
      }}
    >
      <iframe
        title="Embedded YouTube Video"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: "translateZ(0)",
        }}
        type="text/html"
        allowFullScreen="allowfullscreen"
        src={`https://www.youtube.com/embed/${youtubeId}?modestbranding=1&rel=0&hl=en-gb`}
        frameBorder="0"
      />
    </div>
  )
}

YouTubeEmbed.propTypes = { url: PropTypes.string.isRequired }

export default YouTubeEmbed

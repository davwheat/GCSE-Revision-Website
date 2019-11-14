import React from "react"
import PropTypes, { number } from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Caption } from "./EasyText"
import { useTheme } from "@material-ui/core"

const Image = props => {
  const theme = useTheme()
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                childImageSharp {
                  fluid(quality: 90, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
                extension
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(props.filename)
        })

        console.log(props.filename)
        console.log(image.node.extension)
        console.log("---------------------")

        if (!image || !image.node) {
          return null
        }

        if (image.node.extension === "svg") {
          return (
            <>
              <div
                className="custom-svg-wrapper"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: 175,
                  maxHeight: 400,
                  height: "35vh",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    opacity: 1,
                  }}
                  src={image.node.publicURL}
                  alt={props.alt}
                  draggable="false"
                />
              </div>
              <Caption
                style={{
                  textAlign: "center",
                  display: "block",
                  width: "90%",
                  margin: "auto",
                  marginTop: theme.spacing(2),
                }}
              >
                {props.alt}
              </Caption>
            </>
          )
        }

        if (!image.node.childImageSharp) return null

        const imageSizes = image.node.childImageSharp.fluid

        return (
          <>
            <Img
              alt={props.alt}
              fluid={imageSizes}
              draggable={false}
              style={{ maxHeight: 400 }}
              imgStyle={{ objectFit: "contain" }}
              critical={props.critical ? props.critical : false}
            />
            <Caption
              style={{
                textAlign: "center",
                display: "block",
                width: "90%",
                margin: "auto",
                marginTop: theme.spacing(2),
              }}
            >
              {props.alt}
            </Caption>
          </>
        )
      }}
    />
  )
}

Image.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string,
  critical: PropTypes.bool,
}

export default Image

import React from "react"
import PropTypes from "prop-types"
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
                name
                childImageSharp {
                  fluid(maxHeight: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(props.filename)
        })
        if (!image) {
          return null
        }

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

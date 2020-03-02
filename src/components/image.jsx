/* eslint-disable react/prop-types */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Caption } from "./EasyText"
import { useTheme, IconButton, Tooltip, makeStyles } from "@material-ui/core"
import Carousel, { Modal, ModalGateway } from "react-images"

import CloseIcon from "mdi-react/CloseIcon"

const useStyles = makeStyles(theme => ({
  noCarouselWrapper: {
    position: "relative",
    overflow: "hidden",
    minHeight: 175,
    maxHeight: 500,
    height: "35vh",
  },
  svgWrapper: {
    position: "relative",
    overflow: "hidden",
    minHeight: 175,
    maxHeight: 500,
    height: "35vh",
    cursor: "zoom-in",
  },
  customImg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    opacity: 1,
    cursor: "zoom-in",
  },
  customImgNoCarousel: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    opacity: 1,
  },
  caption: {
    textAlign: "center",
    display: "block",
    width: "90%",
    margin: "auto",
    marginTop: theme.spacing(2),
  },
}))

const Image = props => {
  const [ModalOpen, setModalOpen] = useState(false)

  const classes = useStyles()

  const toggleModal = () => {
    setModalOpen(!ModalOpen)
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: {
              extension: { regex: "/(gif|jpe?g|tiff|png|webp|bmp|svg)$/i" }
            }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(quality: 90, maxHeight: 500) {
                  ...GatsbyImageSharpFluid_tracedSVG
                  originalImg
                }
              }
              publicURL
              extension
            }
          }
        }
      `}
      render={images => {
        const data = images.images

        const image = data.nodes.find(n => {
          return n.relativePath.includes(props.filename)
        })

        if (!image) {
          return null
        }

        if (props.noCarousel) {
          return (
            <>
              <div className={classes.svgWrapper}>
                <img
                  className={classes.customImgNoCarousel}
                  src={image.publicURL}
                  alt={props.alt}
                  draggable="false"
                />
              </div>
              <Caption className={classes.caption}>{props.alt}</Caption>
            </>
          )
        }

        if (image.extension === "svg" || image.extension === "gif") {
          return (
            <>
              <div
                className={classes.svgWrapper}
                onClick={e => {
                  e.preventDefault()
                  setModalOpen(true)
                }}
              >
                <img
                  className={classes.customImg}
                  src={image.publicURL}
                  alt={props.alt}
                  draggable="false"
                  onClick={() => {
                    setModalOpen(true)
                  }}
                />
              </div>
              <Caption className={classes.caption}>{props.alt}</Caption>

              <ModalGateway>
                {ModalOpen ? (
                  <Modal onClose={toggleModal}>
                    <Carousel
                      backdropClosesModal
                      views={[{ src: image.publicURL, caption: props.alt }]}
                      components={{ Header: CustomHeader }}
                      allowFullscreen={false}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </>
          )
        }

        if (!image.childImageSharp) return null

        const imageSizes = image.childImageSharp.fluid

        return (
          <>
            <div
              style={{ cursor: "zoom-in" }}
              onClick={e => {
                e.preventDefault()
                setModalOpen(true)
              }}
            >
              <Img
                alt={props.alt}
                fluid={imageSizes}
                draggable={false}
                style={{ maxHeight: 500 }}
                imgStyle={{ objectFit: "contain" }}
                critical={props.critical ? props.critical : false}
              />
              <Caption className={classes.caption}>{props.alt}</Caption>
            </div>

            <ModalGateway>
              {ModalOpen ? (
                <Modal onClose={toggleModal}>
                  <Carousel
                    views={[
                      { src: imageSizes.originalImg, caption: props.alt },
                    ]}
                    components={{ Header: CustomHeader }}
                    allowFullscreen={false}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
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
  noCarousel: PropTypes.bool,
}

export default Image

const CustomHeader = ({ isModal, modalProps }) => {
  const theme = useTheme()

  if (!isModal) return null

  const { onClose } = modalProps

  return (
    <div
      style={{
        position: "absolute",
        top: theme.spacing(),
        right: theme.spacing(),
      }}
    >
      <Tooltip title="Close image preview">
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </div>
  )
}

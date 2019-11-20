/* eslint-disable react/prop-types */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Caption } from "./EasyText"
import { useTheme, IconButton, Tooltip } from "@material-ui/core"
import Carousel, { Modal, ModalGateway } from "react-images-maintained"

import CloseIcon from "mdi-react/CloseIcon"

const Image = props => {
  const theme = useTheme()
  const [ModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!ModalOpen)
  }

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
                    ...GatsbyImageSharpFluid_tracedSVG
                    originalImg
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
                  maxHeight: 500,
                  height: "35vh",
                  cursor: "zoom-in",
                }}
                onClick={e => {
                  e.preventDefault()
                  setModalOpen(true)
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
                    cursor: "zoom-in",
                  }}
                  src={image.node.publicURL}
                  alt={props.alt}
                  draggable="false"
                  onClick={() => {
                    setModalOpen(true)
                  }}
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

              <ModalGateway>
                {ModalOpen ? (
                  <Modal onClose={toggleModal}>
                    <Carousel
                      styles={{
                        view: () => ({
                          // none of react-images styles are passed to <View />
                          height: "100vh",
                          width: "100vw",
                          "object-fit": "contain",
                        }),
                      }}
                      views={[
                        { src: image.node.publicURL, caption: props.alt },
                      ]}
                      components={{ Header: CustomHeader }}
                      allowFullscreen={false}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </>
          )
        }

        if (!image.node.childImageSharp) return null

        const imageSizes = image.node.childImageSharp.fluid

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

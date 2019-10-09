import React, { useState } from "react"
import clsx from "clsx"

import {
  makeStyles,
  ButtonGroup,
  Button,
  Snackbar,
  SnackbarContent,
  useTheme,
} from "@material-ui/core"
import useForceUpdate from "../functions/useForceUpdate"
import { H2 } from "./EasyText"

import ErrorIcon from "mdi-react/ErrorOutlineIcon"

const BitmapEditor = () => {
  return (
    <>
      <BitmapImageEditor />
    </>
  )
}

const BitmapImageEditor = () => {
  const forceUpdate = useForceUpdate()

  const [data, setData] = useState({
    width: 4,
    height: 4,
    error: null,
    pixelStates: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  })

  const classes = makeStyles(theme => ({
    pixelLight: {
      background: "white",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      width: "4em",
      height: "4em",
      margin: theme.spacing(0.2),
      cursor: "pointer",
      color: "rgba(0, 0, 0, 0.7)",
    },
    pixelDark: {
      background: "black",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      width: "4em",
      height: "4em",
      margin: theme.spacing(0.2),
      cursor: "pointer",
      color: "rgba(255, 255, 255, 0.7)",
    },
  }))()

  const ChangePixelColour = (x, y) => {
    let { pixelStates, ...state } = data
    console.log(pixelStates)

    pixelStates[x][y] = pixelStates[x][y] === 1 ? 0 : 1
    console.log(pixelStates)

    setData({ pixelStates: pixelStates, ...state })
    forceUpdate()
  }

  const ChangeBitmapSize = (w, h) => {
    if (w < 1 || h < 1) {
      // eslint-disable-next-line no-unused-vars
      let { error, ...state } = data

      let err = (
        <Snackbar
          open
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <SnackbarContent
            style={{
              background: "#f44336",
            }}
            message={
              <span
                id="client-snackbar"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ErrorIcon size={20} style={{ marginRight: 4 }} />
                {`You can't make the image smaller than 1 pixel in width or
                height!`}
              </span>
            }
          />
        </Snackbar>
      )
      setData({ error: err, ...state })
      return
    }

    let { pixelStates, width, height, ...state } = data
    let newPixels = []

    if (w < width || h < height) {
      pixelStates.forEach((row, y) => {
        if (y < h) {
          let newRow = []
          row.forEach((pixel, x) => {
            if (x < w) {
              newRow.push(pixel)
            }
          })
          newPixels.push(newRow)
        }
      })

      setData({ width: w, height: h, pixelStates: newPixels, ...state })
    } else {
      for (let y = 0; y < h; y++) {
        const row = pixelStates[y]

        let newRow = []
        if (!row) {
          newRow = new Array(w).fill(0)
          console.log(newRow)
        } else {
          for (let x = 0; x < w; x++) {
            const pixel = row[x]

            if (!pixel) {
              newRow.push(0)
            } else {
              newRow.push(pixel)
            }
          }
        }
        console.log(newPixels)
        newPixels.push(newRow)
      }

      setData({ width: w, height: h, pixelStates: newPixels, ...state })
    }
  }

  const pixels = []

  let { pixelStates, width, height } = data
  for (let y = 0; y < height; y++) {
    const realY = height - y - 1
    const cols = []
    for (let x = 0; x < width; x++) {
      const color =
        pixelStates[y][x] === 1 ? classes.pixelLight : classes.pixelDark

      cols.push(
        <td
          className={color}
          key={x}
          onClick={() => {
            ChangePixelColour(y, x)
          }}
        >
          ({x}, {realY})
        </td>
      )
    }
    pixels.push(<tr key={y}>{cols}</tr>)
  }

  return (
    <>
      <table>
        <tbody>{pixels}</tbody>
      </table>
      <br />
      <H2 gutterBottom>Options</H2>
      <ButtonGroup
        color="primary"
        aria-label="width changer"
        style={{ marginRight: 16 }}
      >
        <Button
          onClick={() => {
            ChangeBitmapSize(width - 1, height)
          }}
        >
          -
        </Button>
        <Button disabled>Width: {width}</Button>
        <Button
          onClick={() => {
            ChangeBitmapSize(width + 1, height)
          }}
        >
          +
        </Button>
      </ButtonGroup>
      <ButtonGroup color="primary" aria-label="height changer">
        <Button
          onClick={() => {
            ChangeBitmapSize(width, height - 1)
          }}
        >
          -
        </Button>
        <Button disabled>Height: {height}</Button>
        <Button
          onClick={() => {
            ChangeBitmapSize(width, height + 1)
          }}
        >
          +
        </Button>
      </ButtonGroup>

      {data.error}
    </>
  )
}

export default BitmapEditor

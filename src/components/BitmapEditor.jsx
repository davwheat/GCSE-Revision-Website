import React from "react"

import {
  makeStyles,
  ButtonGroup,
  Button,
  FormControlLabel,
  Switch,
  TextField,
} from "@material-ui/core"
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab"

import useForceUpdate from "../functions/useForceUpdate"
import useStateWithLocalStorage from "../functions/useStateWithLocalStorage"
import { H2 } from "./EasyText"

const BitmapEditor = () => {
  return (
    <>
      <BitmapImageEditor />
    </>
  )
}

const BitmapImageEditor = () => {
  const forceUpdate = useForceUpdate()

  const [data, setData, resetData] = useStateWithLocalStorage(
    "bitmapEditorData",
    {
      width: 4,
      height: 4,
      oneColour: "white",
      showValues: false,
      pixelStates: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    }
  )

  const FixBrokenLocalStorage = () => {
    if (typeof window !== "undefined") {
      const { width, height } = data
      if (width < 1 || width > 16 || height < 1 || height > 16) {
        resetData()
        forceUpdate()
      }
    }
  }

  FixBrokenLocalStorage()

  const classes = makeStyles(theme => ({
    pixelOn: {
      background: data.oneColour,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      width: "4em",
      height: "4em",
      margin: theme.spacing(0.2),
      cursor: "pointer",
      color:
        data.oneColour === "black"
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(0, 0, 0, 0.7)",
    },
    pixelOff: {
      background: data.oneColour === "white" ? "black" : "white",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      width: "4em",
      height: "4em",
      margin: theme.spacing(0.2),
      cursor: "pointer",
      color:
        data.oneColour === "white"
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(0, 0, 0, 0.7)",
    },
    labelButton: {
      color: theme.palette.text.secondary + " !important",
    },
  }))()

  const ChangePixelColour = (x, y) => {
    let { pixelStates, ...state } = data

    pixelStates[x][y] = pixelStates[x][y] === 1 ? 0 : 1

    setData({ pixelStates: pixelStates, ...state })
    forceUpdate()
  }

  const ChangeDefaultValue = val => {
    setData({ ...data, oneColour: val })
  }

  const ToggleValues = show => {
    setData({ ...data, showValues: show })
  }

  const GetBinary = () => {
    if (
      data.width > 16 ||
      data.height > 16 ||
      data.width < 1 ||
      data.height < 1
    )
      return

    const { pixelStates } = data

    if (typeof pixelStates === "undefined") return

    let out = ""

    pixelStates.forEach((row, i) => {
      row.forEach(pixel => {
        out += pixel
      })
      if (i + 1 !== pixelStates.length) out += "\n"
    })

    return out
  }

  const ChangeBitmapSize = (w, h) => {
    let { pixelStates, width, height, ...state } = data

    if (w < 1 || h < 1) {
      // eslint-disable-next-line no-unused-vars
      let { ...ss } = data

      setData({
        ...ss,
        width: w < 1 ? 1 : width,
        height: w < 1 ? 1 : height,
      })
      return
    }
    if (w > 16 || h > 16) {
      let { ...ss } = data

      setData({
        ...ss,
        width: w > 16 ? 16 : width,
        height: h > 16 ? 16 : height,
      })
      return
    }

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

        newPixels.push(newRow)
      }

      setData({ width: w, height: h, pixelStates: newPixels, ...state })
    }
  }

  const pixels = []

  let { pixelStates, width, height } = data
  for (let y = 0; y < height; y++) {
    const cols = []

    for (let x = 0; x < width; x++) {
      const color = pixelStates[y][x] === 1 ? classes.pixelOn : classes.pixelOff

      cols.push(
        <td
          className={color}
          key={x}
          onClick={() => {
            ChangePixelColour(y, x)
          }}
          onKeyPress={e => {
            if (e.key = "Enter" || e.key = " " || e.which == 13 || e.which == 32) {
              ChangePixelColour(y, x)
            }
          }}
          style={{ whiteSpace: "nowrap" }}
          tabindex="0"
        >
          {data.showValues ? data.pixelStates[y][x] : null}
        </td>
      )
    }
    pixels.push(
      <tr style={{ whiteSpace: "nowrap" }} key={y}>
        {cols}
      </tr>
    )
  }

  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <table style={{ tableLayout: "fixed" }}>
          <tbody>{pixels}</tbody>
        </table>
      </div>
      <br />
      <H2 gutterBottom>Binary Output</H2>
      <TextField
        multiline
        value={GetBinary()}
        margin="normal"
        variant="outlined"
        InputProps={{
          readOnly: true,
          classes: { inputMultiline: "monospace-font" },
        }}
      />
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
        <Button disabled className={classes.labelButton}>
          Width: {width}
        </Button>
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
        <Button disabled className={classes.labelButton}>
          Height: {height}
        </Button>
        <Button
          onClick={() => {
            ChangeBitmapSize(width, height + 1)
          }}
        >
          +
        </Button>
      </ButtonGroup>
      <br />
      <br />
      <ToggleButtonGroup
        color="primary"
        aria-label="on value changer"
        exclusive
        size="small"
        onChange={(e, value) => ChangeDefaultValue(value)}
      >
        <ToggleButton disabled className={classes.labelButton}>
          Value of {`'1'`}
        </ToggleButton>
        <ToggleButton
          selected={data.oneColour === "white" ? true : false}
          value="white"
        >
          White
        </ToggleButton>
        <ToggleButton
          selected={data.oneColour === "black" ? true : false}
          value="black"
        >
          Black
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
      <br />

      <FormControlLabel
        control={
          <Switch
            checked={data.showValues}
            value="y"
            onChange={e => ToggleValues(e.target.checked)}
            color="primary"
          />
        }
        label="Show values"
      />

      <br />
      <br />
      <Button color="primary" variant="outlined" onClick={resetData}>
        Reset all options
      </Button>
    </>
  )
}

export default BitmapEditor

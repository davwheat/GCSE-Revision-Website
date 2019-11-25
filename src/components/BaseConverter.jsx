import React from "react"

import { useSnackbar } from "notistack"

import useStateWithLocalStorage from "../functions/useStateWithLocalStorage"

import {
  Paper,
  TextField,
  Grid,
  InputAdornment,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  textFieldMargin: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

const BaseConverter = () => {
  const classes = useStyles()

  const { enqueueSnackbar } = useSnackbar()

  const [data, setData, resetData] = useStateWithLocalStorage(
    "baseConversion",
    { decimal: "0", binary: "0", hexadecimal: "0", num: 0, error: undefined }
  )

  const FormatNumberString = (inputString, n, pad = false) => {
    return [
      ...inputString
        .split("")
        .reverse()
        .join(""),
    ]
      .map((d, i) => {
        let val

        if ((i + 1) % n == 0) {
          val = d + " "
        } else {
          // "pad" pads the start of the formatted number with
          // zeros
          //
          // e.g.
          // 1101100 -> 0110 1100
          // instead of
          // 1101100 -> 110 1100

          if (pad && i + 1 === inputString.length && (i + 1) % n !== 0) {
            val = d + "0".repeat(4 - ((i + 1) % n))
          } else {
            val = d
          }
        }

        return val
      })
      .join("")
      .split("")
      .reverse()
      .join("")
      .trim()
  }

  const handleChange = e => {
    const el = e.target

    let newData = {
      decimal: "0",
      binary: "0",
      hexadecimal: "0",
      num: 0,
      error: null,
    }

    if (el.value === "") {
      newData.num = 0
      newData.decimal = newData.binary = newData.hexadecimal = ""

      setData(newData)
      return
    }

    let value = el.value.replace(new RegExp(" ", "g"), "")

    switch (el.id) {
      case "decimal":
        newData.num = parseInt(value, 10)
        break
      case "hexadecimal":
        newData.num = parseInt(value, 16)
        break
      case "binary":
        newData.num = parseInt(value, 2)
        break
    }

    if (newData.num > Number.MAX_SAFE_INTEGER) {
      newData.error = "Number entered is above maximum safe value."

      newData.decimal = data.decimal
      newData.binary = data.binary
      newData.hexadecimal = data.hexadecimal
      switch (el.id) {
        case "decimal":
          newData.decimal = FormatNumberString(value, 3)
          break
        case "hexadecimal":
          newData.binary = FormatNumberString(value, 4, true)
          break
        case "binary":
          newData.hexadecimal = FormatNumberString(value, 2, true)
          break
      }
    } else {
      newData.decimal = FormatNumberString(newData.num.toString(10), 3)
      newData.binary = FormatNumberString(newData.num.toString(2), 4, true)
      newData.hexadecimal = FormatNumberString(
        newData.num.toString(16),
        2,
        true
      )
    }

    if (isNaN(newData.num)) return

    setData(newData)
  }

  if (data.error) {
    enqueueSnackbar(data.error, { variant: "error" })
  }

  return (
    <>
      <Paper elevation={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              error={data.error}
              id="decimal"
              onChange={handleChange}
              className={classes.textFieldMargin}
              variant="outlined"
              fullWidth
              value={data.decimal}
              key="dec"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">DEC</InputAdornment>
                ),
              }}
              inputProps={{
                maxLength: 21,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={data.error}
              id="binary"
              onChange={handleChange}
              className={classes.textFieldMargin}
              variant="outlined"
              fullWidth
              value={data.binary}
              key="bin"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">BIN</InputAdornment>
                ),
              }}
              inputProps={{
                maxLength: 69,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={data.error}
              id="hexadecimal"
              onChange={handleChange}
              className={classes.textFieldMargin}
              variant="outlined"
              fullWidth
              value={data.hexadecimal}
              key="hex"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">HEX</InputAdornment>
                ),
              }}
              inputProps={{
                maxLength: 20,
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default BaseConverter

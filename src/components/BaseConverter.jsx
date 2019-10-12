import React from "react"

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

  const [data, setData, resetData] = useStateWithLocalStorage(
    "baseConversion",
    { decimal: "0", binary: "0", hexadecimal: "0", num: 0 }
  )

  const handleChange = e => {
    const el = e.target

    let newData = { decimal: "0", binary: "0", hexadecimal: "0", num: 0 }

    switch (el.id) {
      case "decimal":
        newData.num = parseInt(el.value, 10)
        newData.decimal = newData.num.toString(10)
        newData.hexadecimal = newData.num.toString(16)
        newData.binary = newData.num.toString(2)
        break
      case "hexadecimal":
        newData.num = parseInt(el.value, 16)
        newData.decimal = newData.num.toString(10)
        newData.hexadecimal = newData.num.toString(16)
        newData.binary = newData.num.toString(2)
        break
      case "binary":
        newData.num = parseInt(el.value, 2)
        newData.decimal = newData.num.toString(10)
        newData.hexadecimal = newData.num.toString(16)
        newData.binary = newData.num.toString(2)
        break
    }

    setData(newData)
  }

  return (
    <>
      <Paper elevation={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="decimal"
              onChange={handleChange}
              className={classes.textFieldMargin}
              variant="outlined"
              fullWidth
              value="0"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">DEC</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="binary"
              onChange={handleChange}
              className={classes.textFieldMargin}
              variant="outlined"
              fullWidth
              value="0"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">BIN</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="hexadecimal"
              onChange={handleChange}
              className={classes.textFieldMargin}
              variant="outlined"
              fullWidth
              value="0"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">HEX</InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default BaseConverter

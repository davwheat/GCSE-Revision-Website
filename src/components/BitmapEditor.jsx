import React, { Component } from "react"
import $ from "jquery"
import { makeStyles } from "@material-ui/core"

export default class BitmapEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 4, height: 4, pixelStates: null }
  }

  render() {
    const classes = makeStyles(() => ({
      pixel: {
        padding: 8,
      },
    }))()

    const pixels = []

    for (let i = 0; i < this.state.height; i++) {
      const cols = []
      for (let i = 0; i < this.state.width; i++) {
        cols.push(
          <td className={classes.pixel} key={i}>
            {i}
          </td>
        )
      }
      pixels.push(<tr key={i}>{cols}</tr>)
    }

    return (
      <div id="bitmapEditor">
        <table>
          <tbody>{pixels}</tbody>
        </table>
      </div>
    )
  }
}

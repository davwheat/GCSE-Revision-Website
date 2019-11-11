import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

import "./css/periodic-table.css"

import { makeStyles, Paper } from "@material-ui/core"
import PanZoom from "react-easy-panzoom"

import { H2, H5, H6, P, P2 } from "./EasyText"
import { ConvertStringToUrl } from "../functions/stringManipulations"

import tableData from "../constants/elements"

const useStyles = makeStyles(() => ({
  table: {
    display: "grid",
    gridTemplateColumns: "repeat(17, auto) 1fr",
    margin: "0 auto",
    cursor: "move",
  },
  zoomyPannyBitThing: {
    touchAction: "none",
    height: "80vh",
    minHeight: 400,
    maxHeight: 600,
    "-webkit-touch-callout": "none" /* iOS Safari */,
    "-webkit-user-select": "none" /* Safari */,
    "-khtml-user-select": "none" /* Konqueror HTML */,
    "-moz-user-select": "none" /* Firefox */,
    "-ms-user-select": "none" /* Internet Explorer/Edge */,
    "user-select": "none",
    /* Non-prefixed version, currently supported by Chrome and Opera */
    "& *": {
      touchAction: "none",
      "-webkit-touch-callout": "none" /* iOS Safari */,
      "-webkit-user-select": "none" /* Safari */,
      "-khtml-user-select": "none" /* Konqueror HTML */,
      "-moz-user-select": "none" /* Firefox */,
      "-ms-user-select": "none" /* Internet Explorer/Edge */,
      "user-select": "none",
      /* Non-prefixed version, currently supported by Chrome and Opera */
    },
  },
}))

const PeriodicTable = () => {
  const classes = useStyles()
  const ref = useRef(null)

  // useEffect(() => {
  //   ref.current.addEventListener(
  //     "touchstart",
  //     ev => {
  //       ev.stopPropagation()
  //     },
  //     { passive: false }
  //   )
  // })

  return (
    <Paper
      elevation={1}
      style={{
        overflow: "hidden",
      }}
      ref={ref}
    >
      <PanZoom
        minZoom={0.35}
        maxZoom={2.25}
        enableBoundingBox
        boundaryRatioHorizontal={0.9}
        boundaryRatioVertical={0.9}
        zoomSpeed={1.15}
        autoCenter
        autoCenterZoomLevel={1.25}
        realPinch
        className={classes.zoomyPannyBitThing}
      >
        <section className={classes.table}>
          {Array.apply(null, { length: 118 }).map((e, i) => {
            const num = i + 1

            if (57 < num && num <= 71) return null
            if (89 < num && num <= 103) return null

            return <Element key={num} num={num} />
          })}

          <div className={`element element--descriptive element--key`}>
            <H5 className="number" component="p">
              Mass Number
            </H5>
            <H2 className="symbol" component="h6">
              Symbol
            </H2>
            <H6 className="element-name" component="p">
              Element Name
            </H6>
            <H5 className="number" component="p">
              Atomic/Proton Number
            </H5>
          </div>

          <div className={`element--extra-info`}>
            <P paragraph>
              * The Lanthanides (atomic numbers 58 – 71) and the Actinides
              (atomic numbers 90 – 103) have been omitted.
            </P>
            <P paragraph>
              Relative atomic masses for <strong>Cu</strong> and{" "}
              <strong>Cl</strong> have not been rounded to the nearest whole
              number.
            </P>
          </div>
        </section>
      </PanZoom>
    </Paper>
  )
}

const Element = ({ num }) => {
  const name = tableData[num].name
  let symbol = tableData[num].symbol
  const category = ConvertStringToUrl(tableData[num].category)

  // Chlorine (Cl, 17) and Copper (Cu, 29) are rounded to .5, NOT whole number
  let massNumber = [17, 29].includes(num)
    ? Math.round(tableData[num].atomic_mass * 2) / 2
    : Math.round(tableData[num].atomic_mass)

  // enclose in square brackets if radioactive
  if (
    [
      43,
      84,
      85,
      86,
      87,
      88,
      89,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
    ].includes(num)
  )
    massNumber = `[${massNumber}]`

  if ([57, 89].includes(num)) {
    symbol += "*"
  }

  return (
    <div className={`element element-${num} element--${category}`}>
      <H5 className="number" component="p">
        {massNumber}
      </H5>
      <H2 className="symbol" component="h6">
        {symbol}
      </H2>
      <H6 className="element-name" component="p">
        {name}
      </H6>
      <H5 className="number" component="p">
        {num}
      </H5>
    </div>
  )
}

Element.propTypes = {
  num: PropTypes.number.isRequired,
}

export default PeriodicTable

export { PeriodicTable, Element }

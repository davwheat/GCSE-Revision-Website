import React from "react"
import { Typography } from "@material-ui/core"

export const H1 = props => (
  <Typography variant="h1" {...props}>
    {props.children}
  </Typography>
)

export const H2 = props => (
  <Typography variant="h2" {...props}>
    {props.children}
  </Typography>
)

export const H3 = props => (
  <Typography variant="h3" {...props}>
    {props.children}
  </Typography>
)

export const H4 = props => (
  <Typography variant="h4" {...props}>
    {props.children}
  </Typography>
)

export const H5 = props => (
  <Typography variant="h5" {...props}>
    {props.children}
  </Typography>
)

export const H6 = props => (
  <Typography variant="h6" {...props}>
    {props.children}
  </Typography>
)

export const Subtitle1 = props => (
  <Typography variant="subtitle1" {...props}>
    {props.children}
  </Typography>
)

export const Subtitle2 = props => (
  <Typography variant="subtitle2" {...props}>
    {props.children}
  </Typography>
)

export const Body1 = props => (
  <Typography variant="body1" {...props}>
    {props.children}
  </Typography>
)

export const Body2 = props => (
  <Typography variant="body2" {...props}>
    {props.children}
  </Typography>
)

export const P = props => Body1(props)

export const P1 = props => Body1(props)

export const P2 = props => Body2(props)

export const Caption = props => (
  <Typography variant="caption" {...props}>
    {props.children}
  </Typography>
)

export const T = props => <Typography {...props}></Typography>

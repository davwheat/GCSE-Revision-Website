/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React from "react"
import PropTypes from "prop-types"

import ReactMarkdown from "react-markdown/with-html"

import Link from "./Link"
import {
  Paper,
  Divider,
  useTheme,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  withStyles,
} from "@material-ui/core"
import { P, H2, H3, H4, H5, H6, Subtitle1 } from "./EasyText"
import Quote from "./Blockquote"

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
    fontSize: 14,
  },
  body: {
    fontSize: 14,
    borderRight: "1px solid rgba(81, 81, 81, 1)",
  },
}))(TableCell)

const HeadingLevelToComponent = (level, props) => {
  // Start with H2 because H1 is generated automatically from the title in the MD doc
  switch (level) {
    case 1:
      return <H2 gutterBottom children={props.children} />
    case 2:
      return <H3 gutterBottom children={props.children} />
    case 3:
      return <H4 gutterBottom children={props.children} />
    case 4:
      return <H5 gutterBottom children={props.children} />
    case 5:
      return <H6 gutterBottom children={props.children} />
    case 6:
      return <Subtitle1 gutterBottom children={props.children} />

    // default to H6 if you try to get a heading of level 0 or 7, as an example
    default:
      return <H6 children={props.children} />
  }
}
// Renderer docs: https://github.com/rexxars/react-markdown#node-types
let row = 0

function markdownRenderers(theme) {
  return {
    root: props => {
      return <article children={props.children} />
    },
    paragraph: props => {
      return <P paragraph children={props.children} />
    },
    thematicBreak: props => (
      <Divider
        variant="middle"
        style={{ marginBottom: theme.spacing(1.5) }}
        children={props.children}
      />
    ),
    blockquote: props => <Quote children={props.children} />,
    link: props => <Link to={props.href} children={props.children} />,
    linkReference: props => <Link to={props.href} children={props.children} />,
    table: props => (
      <Paper
        style={{
          width: "100%",
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(3),
          overflowX: "auto",
        }}
      >
        <Table children={props.children} />
      </Paper>
    ),
    tableHead: props => <TableHead children={props.children} />,
    tableBody: props => <TableBody children={props.children} />,
    tableRow: props => {
      console.log(props)
      row++
      return (
        <TableRow
          hover={!props.isHeader}
          tabIndex={-1}
          key={row}
          children={props.children}
        />
      )
    },
    tableCell: props => {
      return (
        <StyledTableCell
          align={props.align ? props.align : "left"}
          children={props.children}
        />
      )
    },
    heading: props => HeadingLevelToComponent(props.level, props),
  }
}

const Markdown = props => {
  const theme = useTheme()

  const { src } = props
  const renderers = markdownRenderers(theme)

  return <ReactMarkdown source={src} escapeHtml={false} renderers={renderers} />
}

Markdown.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Markdown

/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React from "react"
import PropTypes from "prop-types"

import ReactMarkdown from "react-markdown/with-html"

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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@material-ui/core"

import Lowlight from "react-lowlight"

// Load any languages you want to use
// (see https://github.com/isagalaev/highlight.js/tree/master/src/languages)
import js from "highlight.js/lib/languages/javascript"
import py from "highlight.js/lib/languages/python"
import cs from "highlight.js/lib/languages/cs"
import xml from "highlight.js/lib/languages/xml"
import md from "highlight.js/lib/languages/markdown"
import php from "highlight.js/lib/languages/php"
import css from "highlight.js/lib/languages/css"

import "highlight.js/styles/monokai-sublime.css"

import Link from "./Link"
import GImage from "./image"
import { P, H2, H3, H4, H5, H6, Subtitle1, P1 } from "./EasyText"
import Quote from "./Blockquote"

Lowlight.registerLanguage("js", js)
Lowlight.registerLanguage("py", py)
Lowlight.registerLanguage("cs", cs)
Lowlight.registerLanguage("xml", xml)
Lowlight.registerLanguage("md", md)
Lowlight.registerLanguage("php", php)
Lowlight.registerLanguage("css", css)

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
    root: props => <article children={props.children} />,
    paragraph: props => <P paragraph children={props.children} />,
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
    tableCell: props => (
      <StyledTableCell
        align={props.align ? props.align : "left"}
        children={props.children}
      />
    ),
    image: props => <GImage filename={props.src} alt={props.alt} />,
    heading: props => HeadingLevelToComponent(props.level, props),
    inlineCode: props => <code>{props.children}</code>,
    code: props => <Lowlight value={props.children} />,
    list: props => {
      const { ordered } = props
      return (
        <List
          component={ordered ? "ol" : "ul"}
          style={{
            width: "max-content",
            minWidth: "50%",
            maxWidth: "100%",
            marginBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.paper,
          }}
        >
          {props.children}
        </List>
      )
    },
    listItem: props => {
      const { children, index, checked, ordered } = props
      return (
        <ListItem component="li" button style={{ cursor: "unset" }}>
          {ordered ? (
            <ListItemIcon>
              {checked !== true ? (
                <P1 display="inline">{index + 1}.</P1>
              ) : (
                <Checkbox
                  edge="start"
                  checked={checked}
                  disabled
                  tabIndex={-1}
                />
              )}
            </ListItemIcon>
          ) : null}
          <ListItemText primary={children} />
        </ListItem>
      )
    },
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

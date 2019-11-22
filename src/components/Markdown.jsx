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
  makeStyles,
} from "@material-ui/core"

import "./css/katex.css"
import "katex/dist/katex.min.css"
import TeX from "@matejmazur/react-katex"
import RemarkMathPlugin from "remark-math"

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
import { P, H2, H3, H4, H5, H6, P1, Subtitle2 } from "./EasyText"
import Quote from "./Blockquote"

import textToSafeId from "../functions/textToSafeId"
import YouTubeEmbed from "./YouTubeEmbed"

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
    fontSize: 16,
  },
  body: {
    fontSize: 16,
    borderRight: "1px solid rgba(81, 81, 81, 1)",
  },
}))(TableCell)

const useStyles = makeStyles(() => ({
  embeddedList: {
    "& > li": {
      backgroundSize: 20,
      marginLeft: -28,
      paddingLeft: 28,
      background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1000'%3E%3Cpath transform='translate(0,450)' fill='%23fff' d='M742 508q-9-9-9-22.5t9-22.5l172-172H32q-13 0-22.5-9.5T0 259t9.5-22.5T32 227h883L743 55q-10-9-10-22.5T743 10q9-10 22.5-10T788 10l227 226q9 9 9 22.5t-9 22.5L787 508q-9 9-22.5 9t-22.5-9z'/%3E%3C/svg%3E") no-repeat left top`,
    },
    listStyle: "none",
  },
  tableHead: {
    "& th": {
      "&:first-child": {
        borderTopLeftRadius: 3,
      },
      "&:last-child": {
        borderTopRightRadius: 3,
      },
    },
  },
}))

const HeadingLevelToComponent = (level, props) => {
  // Start with H2 because H1 is generated automatically from the title in the MD doc

  const classes = makeStyles(() => ({
    heading: {
      position: "relative",
      "&:hover": {
        "& a": {
          visibility: "visible",
        },
      },
    },
  }))()

  switch (level) {
    case 1:
      return (
        <H2
          gutterBottom
          style={{ marginTop: 32 }}
          id={textToSafeId(props.children[0].props.value)}
          className={classes.heading}
        >
          {props.children}
        </H2>
      )
    case 2:
      return (
        <H3
          gutterBottom
          style={{ marginTop: 32 }}
          id={textToSafeId(props.children[0].props.value)}
          className={classes.heading}
        >
          {props.children}
        </H3>
      )
    case 3:
      return (
        <H4
          gutterBottom
          style={{ marginTop: 32 }}
          id={textToSafeId(props.children[0].props.value)}
          className={classes.heading}
        >
          {props.children}
        </H4>
      )
    case 4:
      return (
        <H5
          gutterBottom
          style={{ marginTop: 32 }}
          id={textToSafeId(props.children[0].props.value)}
          className={classes.heading}
        >
          {props.children}
        </H5>
      )
    case 5:
      return (
        <H6
          gutterBottom
          style={{ marginTop: 32 }}
          id={textToSafeId(props.children[0].props.value)}
          className={classes.heading}
        >
          {props.children}
        </H6>
      )
    case 6:
      return (
        <Subtitle2
          gutterBottom
          style={{ marginTop: 32 }}
          id={textToSafeId(props.children[0].props.value)}
          className={classes.heading}
        >
          {props.children}
        </Subtitle2>
      )

    // default to value of H6 if you try to get a heading of level 0 or 7, as an example
    default:
      return (
        <Subtitle2
          gutterBottom
          style={{ marginTop: 32 }}
          id={textToSafeId(props.children[0].props.value)}
          className={classes.heading}
        >
          {props.children}
        </Subtitle2>
      )
  }
}
// Renderer docs: https://github.com/rexxars/react-markdown#node-types
let row = 0

function markdownRenderers(theme, classes) {
  return {
    root: props => <article>{props.children}</article>,
    paragraph: props => <P paragraph>{props.children}</P>,
    thematicBreak: props => (
      <Divider variant="middle" style={{ marginBottom: theme.spacing(1.5) }}>
        {props.children}
      </Divider>
    ),
    blockquote: props => <Quote>{props.children}</Quote>,
    link: props => {
      if (
        props.children.length === 1 &&
        props.children[0].props.value === props.href
      ) {
        return <YouTubeEmbed url={props.href} />
      } else {
        return <Link to={props.href}>{props.children}</Link>
      }
    },
    linkReference: props => <Link to={props.href}>{props.children}</Link>,
    table: props => (
      <Paper
        style={{
          margin: "auto",
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(3),
          overflowX: "auto",
          padding: 1,
        }}
      >
        <Table>{props.children}</Table>
      </Paper>
    ),
    tableHead: props => (
      <TableHead className={classes.tableHead}>{props.children}</TableHead>
    ),
    tableBody: props => <TableBody>{props.children}</TableBody>,
    tableRow: props => {
      let headerEmpty = false

      if (props.isHeader) {
        props.children.forEach(child => {
          headerEmpty = headerEmpty ? true : child.props.children.length === 0
        })
      }

      if (headerEmpty) return null

      row++
      return (
        <TableRow
          style={{ borderRadius: props.isHeader ? 4 : "unset" }}
          hover={!props.isHeader}
          tabIndex={-1}
          key={row}
        >
          {props.children}
        </TableRow>
      )
    },
    tableCell: props => (
      <StyledTableCell align={props.align ? props.align : "left"}>
        {props.children}
      </StyledTableCell>
    ),
    image: props => <GImage filename={props.src} alt={props.alt} />,
    heading: props => HeadingLevelToComponent(props.level, props),
    inlineCode: props => <code>{props.children}</code>,
    code: props => {
      return (
        <Lowlight
          language={props.language ? props.language : undefined}
          value={props.value}
        />
      )
    },
    list: props => {
      const { ordered } = props

      if (props.depth > 0) {
        return (
          <>
            {ordered ? (
              <ol className={classes.embeddedList}>{props.children}</ol>
            ) : (
              <ul className={classes.embeddedList}>{props.children}</ul>
            )}
          </>
        )
      } else {
        return (
          <Paper
            elevation={2}
            style={{
              padding: theme.spacing(2),
              marginBottom: theme.spacing(3),
            }}
          >
            {ordered ? <ol>{props.children}</ol> : <ul>{props.children}</ul>}
          </Paper>
        )
      }
    },
    listItem: props => {
      const { children } = props
      return (
        <>
          <li
            style={{
              marginBottom: theme.spacing(),
              marginTop: theme.spacing(),
            }}
          >
            <P>{children}</P>
          </li>
        </>
      )
    },
    inlineMath: props => <TeX math={props.value} />,
    math: props => <TeX block math={props.value} />,
  }
}

const Markdown = props => {
  const theme = useTheme()
  const classes = useStyles()

  const { src } = props
  const renderers = markdownRenderers(theme, classes)

  return (
    <div style={{ marginLeft: 4, marginRight: 4 }}>
      <ReactMarkdown
        plugins={[RemarkMathPlugin]}
        source={src}
        escapeHtml={false}
        renderers={renderers}
      />
    </div>
  )
}

Markdown.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Markdown

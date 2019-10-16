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

  const classes = makeStyles(theme => ({
    heading: {
      position: "relative",
      "&:hover": {
        "& a": {
          visibility: "visible",
        },
      },
    },
    headingLink: {
      visibility: "hidden",
      display: "inline-block",
      position: "absolute",
      top: "calc(50% - 8px)",
      marginLeft: theme.spacing(),
      fontSize: 16,
      color: `${theme.palette.secondary.main} !important`,
      fontWeight: 500,
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
          <Link
            className={classes.headingLink}
            to={`#${textToSafeId(props.children[0].props.value)}`}
            title="Link to this section"
          >
            #
          </Link>
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
          <Link
            className={classes.headingLink}
            to={`#${textToSafeId(props.children[0].props.value)}`}
            title="Link to this section"
          >
            #
          </Link>
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
          <Link
            className={classes.headingLink}
            to={`#${textToSafeId(props.children[0].props.value)}`}
            title="Link to this section"
          >
            #
          </Link>
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
          <Link
            className={classes.headingLink}
            to={`#${textToSafeId(props.children[0].props.value)}`}
            title="Link to this section"
          >
            #
          </Link>
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
          <Link
            className={classes.headingLink}
            to={`#${textToSafeId(props.children[0].props.value)}`}
            title="Link to this section"
          >
            #
          </Link>
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
          <Link
            className={classes.headingLink}
            to={`#${textToSafeId(props.children[0].props.value)}`}
            title="Link to this section"
          >
            #
          </Link>
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
          <Link
            className={classes.headingLink}
            to={`#${textToSafeId(props.children[0].props.value)}`}
            title="Link to this section"
          >
            #
          </Link>
        </Subtitle2>
      )
  }
}
// Renderer docs: https://github.com/rexxars/react-markdown#node-types
let row = 0

function markdownRenderers(theme) {
  return {
    root: props => <article>{props.children}</article>,
    paragraph: props => <P paragraph>{props.children}</P>,
    thematicBreak: props => (
      <Divider variant="middle" style={{ marginBottom: theme.spacing(1.5) }}>
        {props.children}
      </Divider>
    ),
    blockquote: props => <Quote>{props.children}</Quote>,
    link: props => <Link to={props.href}>{props.children}</Link>,
    linkReference: props => <Link to={props.href}>{props.children}</Link>,
    table: props => (
      <Paper
        style={{
          width: "100%",
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(3),
          overflowX: "auto",
        }}
      >
        <Table>{props.children}</Table>
      </Paper>
    ),
    tableHead: props => <TableHead>{props.children}</TableHead>,
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
        <TableRow hover={!props.isHeader} tabIndex={-1} key={row}>
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
      return (
        <Paper>
          <List
            component={ordered ? "ol" : "ul"}
            style={{
              marginBottom: theme.spacing(2),
            }}
          >
            {props.children}
          </List>
        </Paper>
      )
    },
    listItem: props => {
      const { children, index, checked, ordered } = props
      return (
        <>
          <ListItem
            divider
            disableRipple
            disableTouchRipple
            component="li"
            button
            style={{ cursor: "unset" }}
          >
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
        </>
      )
    },
    inlineMath: props => <TeX math={props.value} />,
    math: props => <TeX block math={props.value} />,
  }
}

const Markdown = props => {
  const theme = useTheme()

  const { src } = props
  const renderers = markdownRenderers(theme)

  return (
    <ReactMarkdown
      plugins={[RemarkMathPlugin]}
      source={src}
      escapeHtml={false}
      renderers={renderers}
    />
  )
}

Markdown.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Markdown

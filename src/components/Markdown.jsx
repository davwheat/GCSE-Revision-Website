/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React from "react"
import PropTypes from "prop-types"

import clsx from "clsx"
import _ from "lodash"

import ReactMarkdown from "react-markdown/with-html"
import JsxParser from "react-jsx-parser"

import Twemoji from "react-twemoji"

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
  Tooltip,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core"
import ExpandIcon from "@material-ui/icons/ExpandMore"

import "./css/markdown.css"
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
import { P, P2, H2, H3, H4, H5, H6, Subtitle2 } from "./EasyText"
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

import TripleIcon from "mdi-react/Numeric3CircleOutlineIcon"
import HigherIcon from "mdi-react/ArrowUpCircleOutlineIcon"
import PaperIcon from "mdi-react/FileDocumentBoxOutlineIcon"
import { IsYouTubeUrl } from "../functions/stringManipulations"

const componentTransforms = classes => ({
  R: props => <>{props.children}</>,
  P,
  P2,
  Triple: ({ primary }) => (
    <Tooltip arrow title="Triple Science only">
      <span>
        <TripleIcon color={primary ? "#ff9800" : null} />
      </span>
    </Tooltip>
  ),
  Higher: ({ primary }) => (
    <Tooltip arrow title="Higher Tier only">
      <span>
        <HigherIcon color={primary ? "#ff9800" : null} />
      </span>
    </Tooltip>
  ),
  Paper: ({ primary }) => (
    <Tooltip arrow title="Included on equation sheet">
      <span>
        <PaperIcon color={primary ? "#ff9800" : null} />
      </span>
    </Tooltip>
  ),
  YouTubeCollapses: ({ titles, urls }) => (
    <>
      {eval(titles).map((_, i) => (
        <ExpansionPanel
          key={eval(titles)[i]}
          TransitionProps={{ mountOnEnter: true }}
          style={{ overflow: "hidden" }}
        >
          <ExpansionPanelSummary expandIcon={<ExpandIcon />}>
            {eval(titles)[i]}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <YouTubeEmbed url={eval(urls)[i]} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </>
  ),
  Collapser,
  ExamQuestion,
})

const Collapser = ({ title, content, children }) => (
  <ExpansionPanel
    TransitionProps={{ mountOnEnter: true }}
    style={{
      marginTop: 24,
    }}
  >
    <ExpansionPanelSummary expandIcon={<ExpandIcon />}>
      {title}
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      {/* {content.split("\\n").map(line => (
      <>
        {line}
        <br />
      </>
    ))} */}
      {children}
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

const ExamQuestion = ({
  questionNumber,
  type,
  question,
  marks,
  marksText,
  marksSquareBrackets,
  lines,
  answerLine,
}) => {
  const usesNumberBoxes = type !== "no-box"

  const str = `${questionNumber}`.split("")

  if (usesNumberBoxes && typeof questionNumber === "number") {
    if (questionNumber < 10) {
      str.unshift("0")
    }
  }

  const classes = useStyles()

  return (
    <Paper className={classes.examQuestion} elevation={2}>
      <div className={clsx("questionNumber", { numberBoxes: usesNumberBoxes })}>
        {usesNumberBoxes ? (
          str.map(s => <span key={s}>{s}</span>)
        ) : (
          <span>{questionNumber}</span>
        )}
      </div>
      <div className="questionTitle">
        <h6>{question}</h6>
      </div>
      <div
        className={clsx("questionMarks", {
          squareBrackets: !!marksSquareBrackets,
          normalBrackets: !marksSquareBrackets,
        })}
      >
        {marks}
        {marksText ? (marks !== 1 ? " marks" : " mark") : ""}
      </div>
      <div className="questionAnswer">
        {lines && _.times(lines, () => <hr className="questionAnswerLine" />)}
        {answerLine ? <hr className="questionFinalAnswer" /> : null}
      </div>
    </Paper>
  )
}

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
    fontSize: 16,
  },
  body: {
    fontSize: 16,
    "&:not(:last-child)": {
      borderRight: "1px solid rgba(81, 81, 81, 1)",
    },
  },
}))(TableCell)

const useStyles = makeStyles(theme => ({
  examQuestion: {
    marginBottom: 24,
    padding: 24,
    background: "white",
    color: "black",
    "& *": {
      fontFamily: "Arial, Poppins, sans-serif !important",
    },
    "& .questionNumber": {
      display: "block",
      float: "left",
      "&.numberBoxes span": {
        border: "1px solid black",
        width: "1.5em",
      },
      "&:not(.numberBoxes) span.additive::before": {
        content: '"("',
      },
      "&:not(.numberBoxes) span.additive::after": {
        content: '")"',
      },
      "& span": {
        fontSize: "16px",
        height: "1.5em",
        width: 47,
        display: "inline-block",
        textAlign: "center",
        lineHeight: "1.5em",
        fontWeight: 700,
      },
      "&:not(.numberBoxes) span": {
        transform: "translateX(-8px)",
      },
    },
    "& .questionTitle": {
      display: "block",
      overflow: "auto",
      paddingLeft: 16,
      lineHeight: "1.5em",
      "& > h6": {
        fontSize: "16px",
        fontWeight: "normal",
        margin: 0,
      },
      "&::after": {
        content: '""',
        clear: "both",
        display: "table",
      },
    },
    "& .questionMarks": {
      textAlign: "right",
      fontWeight: 700,
      "&.squareBrackets::before": {
        content: '"["',
      },
      "&.squareBrackets::after": {
        content: '"]"',
      },
      "&.normalBrackets::before": {
        content: '"("',
      },
      "&.normalBrackets::after": {
        content: '")"',
      },
    },
    "& .questionAnswer": {
      "& hr.questionAnswerLine": {
        border: "none",
        borderBottom: "2px solid #888",
        paddingTop: "1.75em",
        marginLeft: "64px",
      },
      "& hr.questionFinalAnswer": {
        border: "none",
        borderBottom: "2px solid #888",
        paddingTop: "3em",
        margin: "auto",
        minWidth: 100,
        width: "40%",
        display: "block",
        position: "relative",
        overflow: "visible",
        transform: "translate(8ch, 0)",
        "&::before": {
          position: "absolute",
          content: '"Answer"',
          display: "block",
          bottom: -2,
          left: "-7ch",
        },
      },
    },
  },

  embeddedList: {
    "& > li": {
      backgroundSize: 20,
      marginLeft: -28,
      paddingLeft: 28,
      background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1000'%3E%3Cpath transform='translate(0,450)' fill='%23fff' d='M742 508q-9-9-9-22.5t9-22.5l172-172H32q-13 0-22.5-9.5T0 259t9.5-22.5T32 227h883L743 55q-10-9-10-22.5T743 10q9-10 22.5-10T788 10l227 226q9 9 9 22.5t-9 22.5L787 508q-9 9-22.5 9t-22.5-9z'/%3E%3C/svg%3E") no-repeat left top`,
    },
    listStyle: "none",
  },
  article: { "& article": { display: "flex", flexDirection: "column" } },
  tablePaper: {
    overflowX: "auto",
    minWidth: "100%",
    maxWidth: "max-content",
    width: "85vw",
    alignSelf: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    "@media (max-width: 1280px)": {
      width: "92vw",
    },
    "@media (max-width: 960px)": {
      width: "95vw",
    },
    "@media (max-width: 768px)": {
      width: "100vw",
    },
  },
  table: {
    "& thead": {
      "& th": {
        "&:first-child": {
          borderTopLeftRadius: 3,
        },
        "&:last-child": {
          borderTopRightRadius: 3,
        },
      },
    },
  },
}))

let previousHeadings = []

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

  let id = textToSafeId(props.children[0].props.value)

  if (previousHeadings.includes(id)) {
    id += `-${previousHeadings.length}`
  }

  previousHeadings.push(id)

  switch (level) {
    case 1:
      return (
        <H2
          gutterBottom
          style={{ marginTop: 32 }}
          id={id}
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
          id={id}
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
          id={id}
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
          id={id}
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
          id={id}
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
          id={id}
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
          id={id}
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
    paragraph: props => {
      const { children } = props

      console.log(children)

      if (
        (children &&
          children[0] &&
          children.length === 1 &&
          children[0].props &&
          children[0].props.src) ||
        (children &&
          children[0] &&
          children.length === 1 &&
          children[0].props &&
          children[0].props.href &&
          IsYouTubeUrl(children[0].props.href))
      ) {
        return children
      }
      return <P paragraph>{props.children}</P>
    },
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
      <Paper className={classes.tablePaper}>
        <Table className={classes.table}>{props.children}</Table>
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
    inlineCode: props => {
      if (props.value.startsWith("react ")) {
        return (
          <JsxParser
            style={{ display: "inline-block" }}
            jsx={props.value.substr("react ".length)}
            components={componentTransforms(classes)}
          />
        )
      }

      return <code>{props.children}</code>
    },
    code: props => {
      if (props.language === "react") {
        return (
          <JsxParser
            style={{ display: "inline-block" }}
            jsx={props.value}
            components={componentTransforms(classes)}
          />
        )
      }

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
    <Twemoji options={{ className: "twemoji", ext: ".png" }} noWrapper>
      <div className={classes.article}>
        <ReactMarkdown
          plugins={[RemarkMathPlugin]}
          source={src}
          escapeHtml={false}
          renderers={renderers}
        />
      </div>
    </Twemoji>
  )
}

Markdown.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Markdown

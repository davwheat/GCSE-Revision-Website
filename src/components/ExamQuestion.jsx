import React from "react"

import clsx from "clsx"
import _ from "lodash"
import { Paper, makeStyles } from "@material-ui/core"

const ExamQuestion = ({
  questionNumber,
  type,
  marks,
  marksText,
  marksSquareBrackets,
  lines,
  answerLine,
  children,
  withSolution,
  noSpace,
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
    <Paper
      className={classes.examQuestion}
      style={{
        borderBottomLeftRadius: withSolution ? 0 : null,
        borderBottomRightRadius: withSolution ? 0 : null,
        position: withSolution ? "relative" : null,
        zIndex: withSolution ? 1 : null,
        marginBottom: noSpace || withSolution ? 0 : 24,
        marginTop: noSpace ? 0 : 24,
      }}
      elevation={2}
    >
      <div className={clsx("questionNumber", { numberBoxes: usesNumberBoxes })}>
        {usesNumberBoxes ? (
          str.map(s => <span key={s}>{s}</span>)
        ) : (
          <span>{questionNumber}</span>
        )}
      </div>
      <div className="questionTitle">
        <h6>{children}</h6>
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
        {lines && lines !== 0
          ? _.times(lines, () => <hr className="questionAnswerLine" />)
          : null}
        {answerLine ? <hr className="questionFinalAnswer" /> : null}
      </div>
    </Paper>
  )
}

const useStyles = makeStyles(theme => ({
  examQuestion: {
    marginTop: 24,
    padding: 24,
    background: "white",
    color: "black",
    "& > *": {
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
      overflow: "visible",
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
    "& .questionNumber.numberBoxes ~ .questionTitle": {
      paddingLeft: 64,
    },
    "& .questionMarks": {
      marginTop: 8,
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

export default ExamQuestion

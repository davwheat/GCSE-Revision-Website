import React from "react"

// window.fetch polyfill
import "whatwg-fetch"

import clsx from "clsx"

import AllWords from "../ambitiousWords"

import {
  useTheme,
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  Divider,
  Box,
  Container,
} from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"

import ExpandIcon from "mdi-react/ExpandMoreIcon"

import { H5, H6, P, P2, H4 } from "./EasyText"

import SeededRandom from "seedrandom"

const MakeUrl = word =>
  "https://googledictionaryapi.eu-gb.mybluemix.net/?define=" + word

const WordOfTheDay = () => {
  const theme = useTheme()
  const [expanded, setExpanded] = React.useState(false)
  const [stateWord, setStateWord] = React.useState(null)

  const seed = new Date().setHours(0, 0, 0, 0) // Current day in milliseconds
  const rng = SeededRandom(seed)()
  const wordCount = AllWords.length
  const rngWordIndex = Math.floor(rng * wordCount)
  const wordOfTheDay = AllWords[rngWordIndex]

  //
  //   {
  //     word: "rife",
  //     phonetic: "/rʌɪf/",
  //     origin:
  //       "Late Old English rȳfe, probably from Old Norse rīfr ‘acceptable’.",
  //     meaning: {
  //       adjective: [
  //         {
  //           definition:
  //             "(especially of something undesirable) of common occurrence; widespread.",
  //           example: "male chauvinism was rife in medicine",
  //           synonyms: [
  //             "widespread",
  //             "general",
  //             "common",
  //             "universal",
  //             "extensive",
  //             "ubiquitous",
  //             "global",
  //             "omnipresent",
  //             "everywhere",
  //             "present everywhere",
  //             "pandemic",
  //             "epidemic",
  //             "endemic",
  //             "inescapable",
  //             "insidious",
  //             "prevalent",
  //             "penetrating",
  //             "pervading",
  //             "pervasive",
  //             "permeating",
  //             "immanent",
  //           ],
  //         },
  //       ],
  //       adverb: [
  //         {
  //           definition: "In an unchecked or widespread manner.",
  //           example: "speculation ran rife that he was an arms dealer",
  //         },
  //       ],
  //     },
  //   }
  //

  function handleExpand() {
    setExpanded(!expanded)
  }

  const wotdStyles = makeStyles({
    card: {
      minWidth: 500,
      width: "min-content",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    pos: {
      fontSize: 15,
      marginBottom: 12,
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    exampleText: {
      fontSize: 14,
      color: "rgba(255, 255, 255, 0.7)",
    },
    speechPart: {
      fontStyle: "italic",
    },
    indent: {
      paddingLeft: theme.spacing(3),
    },
    skeletonIndent: {
      marginLeft: theme.spacing(3),
    },
  })

  const classes = wotdStyles()

  if (stateWord == null) {
    window
      .fetch(MakeUrl(wordOfTheDay))
      .then(response => {
        return response.json()
      })
      .then(json => {
        setStateWord(json[0])
      })
      .catch(ex => {
        console.error(ex)
        setStateWord(undefined)
      })
  } else {
    console.log(stateWord)
  }

  let allSpeechParts =
    stateWord === null ? null : [...new Set(Object.keys(stateWord["meaning"]))]

  let firstSpeechPart =
    stateWord === null ? null : Object.keys(stateWord["meaning"])[0]

  return (
    <Card className={classes.card}>
      <CardContent component={Box}>
        {stateWord === null ? (
          <Box style={{ top: -8 }}>
            <Skeleton height={28} width="25%" variant="text" />
            <Skeleton
              height={15}
              width={60}
              variant="text"
              style={{ marginBottom: theme.spacing(1.75) }}
            />
            <Skeleton height={16} width={100} variant="text" />
            <Skeleton
              className={classes.skeletonIndent}
              height={16}
              width={`calc(100% - ${theme.spacing(3)}px)`}
              style={{ marginBottom: theme.spacing(0.75) }}
              variant="text"
            />
            <Skeleton
              className={classes.skeletonIndent}
              width={`calc(50% - ${theme.spacing(3)}px)`}
              variant="text"
            />
          </Box>
        ) : (
          <>
            <H4 component="h3">{stateWord["word"]}</H4>
            <P className={classes.pos} color="textSecondary">
              {stateWord["phonetic"]}
            </P>
            <P component="h4" className={classes.speechPart} gutterBottom>
              {firstSpeechPart}
            </P>
            <P2 variant="body2" className={classes.indent}>
              {stateWord["meaning"][firstSpeechPart][0]["definition"]}
            </P2>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <P2
                variant="body2"
                className={clsx(classes.exampleText, classes.indent)}
              >
                "{stateWord["meaning"][firstSpeechPart][0]["example"]}"
                <br />
              </P2>
              {stateWord["meaning"][firstSpeechPart].map((meaning, i) => {
                if (i === 0) return null
                return (
                  <>
                    <P2 variant="body2">{meaning["definition"]}</P2>
                    <P2
                      variant="body2"
                      color="textSecondary"
                      className={classes.exampleText}
                    >
                      "{meaning["example"]}"
                      <br />
                    </P2>
                  </>
                )
              })}
            </Collapse>
          </>
        )}
      </CardContent>
      <CardActions disableSpacing>
        {stateWord === null ? (
          <IconButton
            className={classes.expand}
            aria-expanded={false}
            aria-label="show more"
          >
            <ExpandIcon />
          </IconButton>
        ) : (
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpand}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  )
}

export default WordOfTheDay

import React from "react"
import PropTypes, { string } from "prop-types"

import { Howl } from "howler"

// window.fetch polyfill
import "whatwg-fetch"

import clsx from "clsx"

import AllWords from "../constants/ambitiousWords"

import {
  useTheme,
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  Box,
  Chip,
  Tooltip,
} from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"

import ExpandIcon from "mdi-react/ExpandMoreIcon"
import SpeakIcon from "mdi-react/VolumeHighIcon"

import { P, P2, H4 } from "./EasyText"

import SeededRandom from "seedrandom"

import "./WordOfTheDay.css"

import { Words } from "../audio"

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

  let isPlaying = false

  function handleExpand() {
    setExpanded(!expanded)
  }

  function speakWord() {
    if (typeof window !== "undefined" && !isPlaying) {
      isPlaying = true
      let sound = new Howl({
        src: [Words[wordOfTheDay]],
        onend: () => {
          isPlaying = false
        },
      })
      sound.play()
    }
  }

  const wotdStyles = makeStyles({
    card: {
      maxWidth: "92.5vw",
      width: 650,
      display: "block",
      margin: theme.spacing(2) + "px auto",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    pos: {
      fontSize: 15,
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
      marginTop: 12,
    },
    indent: {
      paddingLeft: theme.spacing(3),
    },
    skeletonIndent: {
      marginLeft: theme.spacing(3),
    },
  })

  const classes = wotdStyles()

  if (stateWord == null && typeof window !== "undefined") {
    window
      .fetch(MakeUrl(wordOfTheDay))
      .then(response => {
        return response.json()
      })
      .then(json => {
        setStateWord(json[0])
      })
      .catch(() => {
        setStateWord(undefined)
      })
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
            <H4
              component="h3"
              style={{
                fontFamily: [
                  "Poppins",
                  "Lexend Deca",
                  "Roboto",
                  '"Helvetica Neue"',
                  '"Segoe UI"',
                  "Arial",
                  "sans-serif",
                ].join(","),
                letterSpacing: -1.5,
              }}
            >
              {stateWord["word"]}
            </H4>
            <P className={classes.pos} color="primary">
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
                &quot;{stateWord["meaning"][firstSpeechPart][0]["example"]}
                &quot;
                <br />
              </P2>
              {stateWord["meaning"][firstSpeechPart][0]["synonyms"] ? (
                <Synonyms
                  words={stateWord["meaning"][firstSpeechPart][0]["synonyms"]}
                />
              ) : null}

              {stateWord["meaning"][firstSpeechPart].map((meaning, i) => {
                if (i === 0) return null
                return (
                  <>
                    <P2 variant="body2" className={classes.indent}>
                      {meaning["definition"]}
                    </P2>
                    <P2
                      variant="body2"
                      className={clsx(classes.exampleText, classes.indent)}
                    >
                      &quot;{meaning["example"]}&quot;
                      <br />
                    </P2>
                    {meaning["synonyms"] ? (
                      <Synonyms words={meaning["synonyms"]} />
                    ) : null}
                  </>
                )
              })}

              {allSpeechParts.map(speechPart => {
                if (speechPart === firstSpeechPart) return null

                return (
                  <>
                    <P
                      component="h4"
                      className={classes.speechPart}
                      gutterBottom
                    >
                      {speechPart}
                    </P>
                    {stateWord["meaning"][speechPart].map(meaning => {
                      return (
                        <>
                          <P2 variant="body2" className={classes.indent}>
                            {meaning["definition"]}
                          </P2>
                          <P2
                            variant="body2"
                            className={clsx(
                              classes.exampleText,
                              classes.indent
                            )}
                          >
                            &quot;{meaning["example"]}&quot;
                            <br />
                          </P2>
                          {meaning["synonyms"] ? (
                            <Synonyms words={meaning["synonyms"]} />
                          ) : null}
                        </>
                      )
                    })}
                  </>
                )
              })}
            </Collapse>
          </>
        )}
      </CardContent>
      <CardActions disableSpacing>
        {stateWord === null ? null : (
          <Tooltip title="Hear aloud">
            <IconButton aria-label="hear aloud" onClick={speakWord}>
              <SpeakIcon />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="See more">
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
        </Tooltip>
      </CardActions>
    </Card>
  )
}

const Synonyms = props => {
  const { words } = props

  const theme = useTheme()
  const [expanded, setExpanded] = React.useState(false)

  const synonymStyles = makeStyles({
    chip: {
      margin: theme.spacing(0.35),
    },
    indent: {
      paddingLeft: theme.spacing(3),
    },
    synonymTitle: {
      fontSize: 14,
    },
  })

  const classes = synonymStyles()

  const handleExpandToggle = () => {
    setExpanded(!expanded)
  }

  return (
    <P2
      paragraph
      color="primary"
      className={clsx(classes.indent, classes.synonymTitle)}
    >
      Synonyms{" "}
      {!expanded ? (
        <>
          {words.map((word, i) => {
            if (!expanded && i > 1 && words.length > 3) return null

            return (
              <Chip
                component="span"
                key={word}
                label={word}
                size="small"
                className={classes.chip}
                variant="outlined"
              />
            )
          })}{" "}
        </>
      ) : (
        <>
          {words.map(word => (
            <Chip
              component="span"
              key={word}
              label={word}
              size="small"
              className={classes.chip}
              variant="outlined"
            />
          ))}
        </>
      )}
      {words.length > 3 ? (
        <Chip
          key="expandSynonyms"
          className={classes.chip}
          size="small"
          label={!expanded ? "More" : "Less"}
          deleteIcon={<CustomSynonymExpandIcon expanded={expanded} />}
          onDelete={handleExpandToggle}
          onClick={handleExpandToggle}
        />
      ) : null}
    </P2>
  )
}

const CustomSynonymExpandIcon = props => {
  const theme = useTheme()

  const classes = makeStyles({
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
  })()

  const { expanded } = props

  return (
    <ExpandIcon
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
    />
  )
}

CustomSynonymExpandIcon.propTypes = {
  expanded: PropTypes.bool.isRequired,
}

Synonyms.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape(string)),
}

export default WordOfTheDay

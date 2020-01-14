import React from "react"

import { Card, CardContent, makeStyles } from "@material-ui/core"

import { H4, P } from "./EasyText"

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(2),
  },
  "@keyframes rainbow": {
    "0%": { backgroundPosition: "0% 50%" },
    "100%": { backgroundPosition: "200% 50%" },
  },
  rainbowText: {
    background: `repeating-linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet, red)`,
    WebkitBackgroundClip: `text`,
    backgroundClip: `text`,
    WebkitTextFillColor: `transparent`,
    animationName: "$rainbow",
    animationDuration: "5s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    backgroundSize: "200% 200%",
    fontWeight: 700,
  },
}))

export default function KeyFact({ body, title }) {
  const classes = useStyles()

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <H4
          className={classes.rainbowText}
          gutterBottom
          title="oooo rainbow text!!"
        >
          {title ? title : `Key Fact`}
        </H4>
        <P>{body}</P>
      </CardContent>
    </Card>
  )
}

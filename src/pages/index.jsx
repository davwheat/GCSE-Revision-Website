import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Grid,
  makeStyles,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  Button,
} from "@material-ui/core"

import { H1, H5, P2, H3 } from "../components/EasyText"
import Link from "../components/Link"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

const subjects = [
  {
    name: "English",
    description: `We offer many helpful English revision
    tools, such as: mini language mocks, essay planning
    tips, quote memorising tools and literature knowledge
    organisers. We're always looking to add more to the
    table!`,
    url: "/subjects/english",
    unreleased: false,
  },
  {
    name: "Maths",
    description: `Our site provides useful tips and tricks to
    help you make the most of your calculator as well as maths
    quizzes and articles on harder topics.`,
    url: "/subjects/maths",
    unreleased: false,
  },
  {
    name: "Computer Science",
    description: `Computer science is made easier with out site.
    With useful suggestions for converting between hex, decimal
    and binary as well as an interactive bitmap editor, there's
    nothing else you'll need to revise (...except your brain and an
      internet-enabled device).`,
    url: null,
    unreleased: true,
  },
]

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <H1 gutterBottom>Welcome</H1>
      <H5 component="p" paragraph>
        Pick a subject below or use the main menu on the left-hand side.
      </H5>
      <br />
      <H3 component="h2">Subjects</H3>
      <br />
      <Grid container spacing={3}>
        {subjects.map(subject => (
          <Grid item xs={12} sm={12} md={6} key={subject.name}>
            <Card className={classes.card}>
              {/* <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                /> */}
              <CardContent>
                <H5 gutterBottom component="h3">
                  {subject.name}
                </H5>
                <P2 color="textSecondary">{subject.description}</P2>
              </CardContent>
              <CardActions>
                {subject.unreleased === true ? (
                  <Button color="primary" disabled>
                    Coming soon
                  </Button>
                ) : (
                  <Link button to={subject.url} size="medium" color="primary">
                    Start revising!
                  </Link>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default IndexPage

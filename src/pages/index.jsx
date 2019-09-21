import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Grid,
  makeStyles,
  Card,
  CardActions,
  CardMedia,
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
    description: "",
    url: "/subjects/english",
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
              <CardActionArea>
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
              </CardActionArea>
              <CardActions>
                <Link
                  button
                  to={subject.url}
                  size="medium"
                  color="primary"
                >
                  Share
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default IndexPage

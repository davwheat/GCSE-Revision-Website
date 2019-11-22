import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/Breadcrumbs"

import { SubjectInfo as subjects } from "../constants"

import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Box,
  useTheme,
  CardActionArea,
} from "@material-ui/core"

import { H1, H5, P2, H3 } from "../components/EasyText"
import Link from "../components/Link"
import Masonry from "react-masonry-component"

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

const IndexPage = () => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <Breadcrumbs items={[{ label: "Home" }]} />
      <H1 gutterBottom>Welcome</H1>
      <H5 component="p" paragraph>
        Pick a subject below or use the main menu on the left-hand side.
      </H5>
      <br />
      <H3 component="h2">Subjects</H3>
      <br />
      <Masonry style={{ margin: "auto" }}>
        {subjects.map(subject => (
          <Box
            key={subject.name}
            style={{ margin: theme.spacing(1.5), maxWidth: 400 }}
          >
            <Card className={classes.card}>
              {subject.unreleased === false ? (
                <CardActionArea
                  component={Link}
                  to={subject.url}
                  className="no-underline color-inherit"
                >
                  <CardContent>
                    <H5 gutterBottom component="h3">
                      {subject.name}
                    </H5>
                    <P2 color="textSecondary">{subject.description}</P2>
                  </CardContent>
                </CardActionArea>
              ) : (
                <CardContent>
                  <H5 gutterBottom component="h3">
                    {subject.name}
                  </H5>
                  <P2 color="textSecondary">{subject.description}</P2>
                </CardContent>
              )}
              <CardActions>
                {subject.unreleased === true ? (
                  <Button color="primary" disabled>
                    Coming soon
                  </Button>
                ) : (
                  <Link
                    linkIsButton
                    to={subject.url}
                    size="medium"
                    color="primary"
                  >
                    Start revising!
                  </Link>
                )}
              </CardActions>
            </Card>
          </Box>
        ))}
      </Masonry>
    </Layout>
  )
}

export default IndexPage

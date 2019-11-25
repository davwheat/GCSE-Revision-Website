import React from "react"
import PropTypes from "prop-types"

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
  CardActionArea,
  Zoom,
} from "@material-ui/core"

import { H1, H4, P2, P, H2 } from "../components/EasyText"
import Link from "../components/Link"

import { XMasonry, XBlock } from "react-xmasonry"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    margin: theme.spacing(1),
    maxWidth: 400,
    "@media (max-width: 768px)": {
      width: `calc(100% - ${theme.spacing(2)}px)`,
      maxWidth: "unset",
    },
  },
  container: {
    margin: "0 auto",
    maxWidth: "100%",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <Breadcrumbs items={[{ label: "Home" }]} />
      <H1 gutterBottom>Welcome</H1>
      <P paragraph>
        Pick a subject below or use the main menu on the left-hand side.
      </P>
      <br />
      <H2>Subjects</H2>
      <br />
      <XMasonry
        targetBlockWidth={375}
        maxColumns={2}
        className={classes.container}
      >
        {subjects.map((subject, i) => (
          <XBlock key={subject.name}>
            <Box className={classes.card}>
              <Zoom in style={{ transitionDelay: i * 50 + "ms" }}>
                <div>
                  <SubjectCard subject={subject} />
                </div>
              </Zoom>
            </Box>
          </XBlock>
        ))}
      </XMasonry>
    </Layout>
  )
}

const SubjectCard = ({ subject }) => (
  <Card>
    {subject.unreleased === false ? (
      <CardActionArea
        component={Link}
        to={subject.url}
        className="no-underline color-inherit"
      >
        <CardContent>
          <H4 gutterBottom component="h3" color="primary" className="keepColor">
            {subject.name}
          </H4>
          <P2 color="textSecondary">{subject.description}</P2>
        </CardContent>
      </CardActionArea>
    ) : (
      <CardContent>
        <H4 gutterBottom component="h3">
          {subject.name}
        </H4>
        <P2 color="textSecondary">{subject.description}</P2>
      </CardContent>
    )}
    <CardActions>
      {subject.unreleased === true ? (
        <Button color="primary" disabled>
          Coming soon
        </Button>
      ) : (
        <Link linkIsButton to={subject.url} size="medium" color="primary">
          Start revising!
        </Link>
      )}
    </CardActions>
  </Card>
)

SubjectCard.propTypes = {
  subject: PropTypes.objectOf({
    unreleased: PropTypes.bool,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
}

export default IndexPage

import React from "react"

import clsx from "clsx"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

import { useTheme } from "@material-ui/styles"

import {
  Grid,
  makeStyles,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
  Button,
  Collapse,
  IconButton,
  Divider,
} from "@material-ui/core"

import { H1, H5, H6, P, P2, H3 } from "../../../components/EasyText"
import Link from "../../../components/Link"
import WordOfTheDay from "../../../components/WordOfTheDay"

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

const SubjectsMathsPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Maths" />
      <H1 gutterBottom>Maths</H1>
      <H6 component="p" paragraph>
        Our site provides useful tips and tricks to help you make the most of
        your calculator as well as maths quizzes and articles on harder topics.
      </H6>
      <br />
      <H3 component="h2">Word of the day</H3>
      <br />
      <WordOfTheDay />
      <H3 component="h2"></H3>
    </Layout>
  )
}

export default SubjectsMathsPage

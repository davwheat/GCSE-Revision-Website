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

const SubjectsEnglishPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="English" />
      <H1 gutterBottom>English</H1>
      <H6 component="p" paragraph>
        We offer many helpful English revision tools, such as: mini language
        mocks, essay planning tips, quote memorising tools and literature
        knowledge organisers. We're always looking to add more to the table!
      </H6>
      <br />
      <H3 component="h2">Word of the day</H3>
      <br />
      <WordOfTheDay />
      <H3 component="h2"></H3>
    </Layout>
  )
}

export default SubjectsEnglishPage

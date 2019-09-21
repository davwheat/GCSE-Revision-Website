import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, makeStyles, Box } from "@material-ui/core"

import Link from "../components/Link"
import { H1, P } from "../components/EasyText"

const useStyles = makeStyles(theme => ({
  box: {
    margin: "auto",
    width: "max-content",
    display: "block",
  },
}))

const NotFoundPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Box textAlign="center">
        <SEO title="Error 404" />
        <H1 gutterBottom>Oops!</H1>
        <P paragraph>Looks like that page doesn't exist.</P>
        <P paragraph>
          <Link to="/">Let's go home</Link>
        </P>
      </Box>
    </Layout>
  )
}

export default NotFoundPage

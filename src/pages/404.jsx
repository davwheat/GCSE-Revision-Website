import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box } from "@material-ui/core"

import Link from "../components/Link"
import { H1, P } from "../components/EasyText"
import Ad from "../components/Advert"

const NotFoundPage = () => {
  return (
    <Layout>
      <Box textAlign="center">
        <SEO title="Error 404" />
        <H1 gutterBottom>Oops!</H1>
        <P paragraph>Looks like that page doesn&apos;t exist.</P>
        <P paragraph>
          <Link to="">Let&apos;s go home</Link>
        </P>
        <Ad />
      </Box>
    </Layout>
  )
}

export default NotFoundPage

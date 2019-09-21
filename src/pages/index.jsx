import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { H1, P } from "../components/EasyText"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1 gutterBottom>Welcome</H1>
    <P>Pick a subject below or use the main menu on the left-hand side.</P>
  </Layout>
)

export default IndexPage

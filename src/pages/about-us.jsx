import React from "react"

import Link from "../components/Link"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { H1, P, Subtitle1 as S1 } from "../components/EasyText"
import { Divider } from "@material-ui/core"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <H1 gutterBottom>About Us</H1>
    <S1 paragraph>
      <b>GCSE Revsision Website</b> is an <abbr>Open Source</abbr> revision tool
      for many different subjects. Our aim is to make simple yet thorough
      revision materials for everyone.
    </S1>

    <Divider variant="middle" style={{ marginBottom: 16 }} />

    <P paragraph>
      This project was originally made by a GCSE student but now anyone can
      contribute to the project via its{" "}
      <Link to="https://github.com/davwheat/GCSE-Revision-Website">
        GitHub repository
      </Link>
      . If you ever find any problems with the content on the site, any bugs
      while using the site, or any other issues, submit a bug report via the
      'Feedback' button from the menu on the left side of the page.
    </P>
  </Layout>
)

export default AboutPage

import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

import { H1, H6, H3 } from "../../../components/EasyText"
// import Link from "../../../components/Link"
import WordOfTheDay from "../../../components/WordOfTheDay"

const SubjectsMathsPage = () => {
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

import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H6, H3 } from "../../../components/EasyText"
import Link from "../../../components/Link"

import WordOfTheDay from "../../../components/WordOfTheDay"
import { Divider } from "@material-ui/core"
import NavigateBeforeIcon from "mdi-react/NavigateBeforeIcon"

const SubjectsEnglishPage = () => {
  return (
    <Layout>
      <SEO title="English" />
      <Link button color="primary" to="/">
        <NavigateBeforeIcon /> Go back
      </Link>
      <Divider variant="middle" style={{ marginBottom: 24, marginTop: 16 }} />
      <H1 gutterBottom>English</H1>
      <H6 component="p" paragraph>
        We offer many helpful English revision tools, such as: mini language
        mocks, essay planning tips, quote memorising tools and literature
        knowledge organisers. We&apos;re always looking to add more to the
        table!
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

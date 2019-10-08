import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H6, H3, P } from "../../../components/EasyText"
import Link from "../../../components/Link"

import { Divider } from "@material-ui/core"
import NavigateBeforeIcon from "mdi-react/NavigateBeforeIcon"

import { Descriptions } from "../../../constants/subjectInfo"

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
        {Descriptions["English"]}
      </H6>
      <H3 gutterBottom component="h2">
        Articles
      </H3>
      <P paragraph>
        Our site offers many GCSE Maths related articles.{" "}
        <Link to="/subjects/maths/articles">
          Click here to see our articles.
        </Link>
      </P>
      <H3 gutterBottom component="h2">
        Calculator Hacks
      </H3>
      <P paragraph>
        Calculators are the most powerful tool (other than your brain) that you
        can take into two out of three Maths exams, so it&apos;s always good to
        know about every little trick you can do with them.
      </P>
      <P paragraph>
        <Link to="/subjects/maths/articles/calculator-hacks/">
          Read our Calculator Hacks article
        </Link>
      </P>
    </Layout>
  )
}

export default SubjectsEnglishPage

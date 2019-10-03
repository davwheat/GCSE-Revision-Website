import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H6, H3, P } from "../../../components/EasyText"
import Link from "../../../components/Link"

import NavigateBackIcon from "mdi-react/NavigateBeforeIcon"
import { Divider } from "@material-ui/core"

const SubjectsMathsPage = () => {
  return (
    <Layout>
      <SEO
        title="Maths"
        description="Our site provides useful tips and tricks to help you make the most of your calculator as well as maths quizzes and articles on harder topics."
      />
      <Link button color="primary" to="/">
        <NavigateBackIcon /> Go back
      </Link>
      <Divider variant="middle" style={{ marginBottom: 24, marginTop: 16 }} />
      <H1 gutterBottom>Maths</H1>
      <H6 component="p" paragraph>
        Our site provides useful tips and tricks to help you make the most of
        your calculator as well as maths quizzes and articles on harder topics.
      </H6>
      <br />
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

export default SubjectsMathsPage

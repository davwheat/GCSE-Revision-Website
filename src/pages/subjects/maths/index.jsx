import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H6, H3, P } from "../../../components/EasyText"
import Link from "../../../components/Link"
import Breadcrumbs from "../../../components/Breadcrumbs"
import Ad from "../../../components/Advert"

import { Descriptions } from "../../../constants/subjectInfo"

const SubjectsMathsPage = () => {
  return (
    <Layout>
      <SEO
        title="Maths"
        description="Our site provides useful tips and tricks to help you make the most of your calculator as well as maths quizzes and articles on harder topics."
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Maths" }]}
      />
      <H1 gutterBottom>Maths</H1>
      <H6 component="p" paragraph>
        {Descriptions["Maths"]}
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
      <Ad />
    </Layout>
  )
}

export default SubjectsMathsPage

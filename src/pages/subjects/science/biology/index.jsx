import React from "react"

import Layout from "../../../../components/layout"
import SEO from "../../../../components/seo"
import { H1, H6, H3, P } from "../../../../components/EasyText"
import Link from "../../../../components/Link"
import Breadcrumbs from "../../../../components/Breadcrumbs"
import Ad from "../../../../components/Advert"

import { Descriptions } from "../../../../constants/subjectInfo"

const SubjectsBiologyPage = () => {
  return (
    <Layout>
      <SEO title="Biology" description={Descriptions["Biology"]} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Science", href: "/subjects/science" },
          { label: "Biology" },
        ]}
      />
      <H1 gutterBottom>Biology</H1>
      <H6 component="p" paragraph>
        {Descriptions["Biology"]}
      </H6>
      <H3 gutterBottom component="h2">
        Articles
      </H3>
      <P paragraph>
        Take a look at one of our full-to-the-brim revision reference guides for
        all the topics.{" "}
        <Link to="/subjects/science/biology/articles">
          Click here to see our articles.
        </Link>
      </P>
      <Ad />
    </Layout>
  )
}

export default SubjectsBiologyPage

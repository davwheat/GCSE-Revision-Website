import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H6, H3, P } from "../../../components/EasyText"
import Link from "../../../components/Link"
import Breadcrumbs from "../../../components/Breadcrumbs"
import Ad from "../../../components/Advert"

import { Descriptions } from "../../../constants/subjectInfo"

const SubjectsSciencePage = () => {
  return (
    <Layout>
      <SEO title="Science" description={Descriptions["Science"]} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Maths" }]} />
      <H1 gutterBottom>Maths</H1>
      <H6 component="p" paragraph>
        {Descriptions["Science"]}
      </H6>
      <H3 gutterBottom component="h2">Select course</H3>
      <Ad />
    </Layout>
  )
}

export default SubjectsSciencePage

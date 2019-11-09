import React from "react"

import Layout from "../../../../components/layout"
import SEO from "../../../../components/seo"
import { H1, H6, H3 } from "../../../../components/EasyText"
import Breadcrumbs from "../../../../components/Breadcrumbs"
import Ad from "../../../../components/Advert"
import TopicList from "../../../../templates/TopicList"

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
        Topics
      </H3>
      <TopicList subject="biology" subjectGroup="science" />
      <Ad />
    </Layout>
  )
}

export default SubjectsBiologyPage

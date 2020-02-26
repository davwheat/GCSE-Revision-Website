import React from "react"

import Layout from "../../../../components/layout"
import TopicList from "../../../../templates/TopicList"
import { H1 } from "../../../../components/EasyText"
import SEO from "../../../../components/seo"
import Breadcrumbs from "../../../../components/Breadcrumbs"

const BusinessTopicList = () => {
  return (
    <Layout>
      <SEO title="Business Topics" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Business", href: "subjects/business" },
          { label: "Topics" },
        ]}
      />

      <H1 gutterBottom>Business Topics</H1>
      <TopicList subject="business" />
    </Layout>
  )
}

export default BusinessTopicList

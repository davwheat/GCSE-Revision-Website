import React from "react"

import Layout from "../../../../../components/layout"
import SubTopicList from "../../../../../templates/SubTopicList.jsx"
import { H1 } from "../../../../../components/EasyText"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"

const BusinessTopicList = () => {
  return (
    <Layout>
      <SEO title="Business Paper 2 Topics" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Business", href: "subjects/business" },
          { label: "Topics", href: "subjects/business/topics" },
          { label: "Paper 2" },
        ]}
      />

      <H1 gutterBottom>Business Paper 2 Topics</H1>
      <SubTopicList subject="business" topic="paper 2" />
    </Layout>
  )
}

export default BusinessTopicList

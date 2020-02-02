import React from "react"

import Layout from "../../../../../components/layout"
import TopicList from "../../../../../templates/TopicList"
import { H1 } from "../../../../../components/EasyText"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"

const ChemistryArticleList = () => {
  return (
    <Layout>
      <SEO title="Chemistry Topics" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Chemistry", href: "subjects/science/chemistry" },
          { label: "Topics" },
        ]}
      />

      <H1 gutterBottom>Chemistry Topics</H1>
      <TopicList subject="chemistry" subjectGroup="science" />
    </Layout>
  )
}

export default ChemistryArticleList

import React from "react"

import ArticleList from "../../../../../templates/Lists/Chemistry/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const ChemTopic4ArticleList = () => {
  return (
    <Layout>
      <SEO title="Chemistry: Chemical Changes" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Chemistry", href: "subjects/science/chemistry" },
          { label: "Topics", href: "subjects/science/chemistry/topics" },
          { label: "Topic 4: Chemical Changes" },
        ]}
      />
      <H1 gutterBottom>Chemistry, Topic 4: Chemical Changes</H1>
      <ArticleList subject="chemistry" topic="topic 4: chemical changes" />
    </Layout>
  )
}

export default ChemTopic4ArticleList

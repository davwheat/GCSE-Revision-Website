import React from "react"

import ArticleList from "../../../../../templates/Lists/Biology/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const BioTopic3ArticleList = () => {
  return (
    <Layout>
      <SEO title="Biology: Infection & Response" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Biology", href: "subjects/science/biology" },
          { label: "Topics", href: "subjects/science/biology/topics" },
          { label: "Topic 3: Infection and Response" },
        ]}
      />
      <H1 gutterBottom>Biology, Topic 3: Infection &amp; Response</H1>
      <ArticleList subject="biology" topic="topic 3: infection and response" />
    </Layout>
  )
}

export default BioTopic3ArticleList

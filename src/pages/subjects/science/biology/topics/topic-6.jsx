import React from "react"

import ArticleList from "../../../../../templates/Lists/Biology/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const BioTopic6ArticleList = () => {
  return (
    <Layout>
      <SEO title="Biology: Inheritance, Variation & Evolution" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Biology", href: "subjects/science/biology" },
          { label: "Topics", href: "subjects/science/biology/topics" },
          { label: "Topic 6: Inheritance, Variation and Evolution" },
        ]}
      />
      <H1 gutterBottom>
        Biology, Topic 6: Inheritance, Variation &amp; Evolution
      </H1>
      <ArticleList
        subject="biology"
        topic="topic 6: inheritance, variation and evolution"
      />
    </Layout>
  )
}

export default BioTopic6ArticleList

import React from "react"

import ArticleList from "../../../../../templates/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Ad from "../../../../../components/Advert"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const BioTopic5ArticleList = () => {
  return (
    <Layout>
      <SEO title="Biology: Homeostasis & Response" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Biology", href: "subjects/science/biology" },
          { label: "Topics", href: "subjects/science/biology/topics" },
          { label: "Topic 5: Homeostasis and Response" },
        ]}
      />
      <H1 gutterBottom>Biology, Topic 5: Homeostasis &amp; Response</H1>
      <ArticleList
        subject="biology"
        topic="topic 5: homeostasis and response"
      />
      <Ad />
    </Layout>
  )
}

export default BioTopic5ArticleList

import React from "react"

import ArticleList from "../../../../../templates/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Ad from "../../../../../components/Advert"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const MathsArticleList = () => {
  return (
    <Layout>
      <SEO title="Biology: Homeostasis & Response" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Science", href: "/subjects/science" },
          { label: "Biology", href: "/subjects/science/biology" },
          { label: "Topics", href: "/subjects/science/biology/topics" },
          { label: "Homeostasis and Response" },
        ]}
      />
      <H1 gutterBottom>Biology: Homeostasis &amp; Response</H1>
      <ArticleList
        subject="biology"
        topic="homeostasis and response"
      />
      <Ad />
    </Layout>
  )
}

export default MathsArticleList

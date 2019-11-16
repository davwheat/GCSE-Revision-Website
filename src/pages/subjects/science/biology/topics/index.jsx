import React from "react"

import Layout from "../../../../../components/layout"

import TopicList from "../../../../../templates/TopicList"

import { H1 } from "../../../../../components/EasyText"
import SEO from "../../../../../components/seo"
import Ad from "../../../../../components/Advert"
import Breadcrumbs from "../../../../../components/Breadcrumbs"

const MathsArticleList = () => {
  return (
    <Layout>
      <SEO title="Biology Topics" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Biology", href: "subjects/science/biology" },
          { label: "Topics" },
        ]}
      />

      <H1 gutterBottom>Biology Topics</H1>
      <TopicList subject="biology" subjectGroup="science" />
      <Ad />
    </Layout>
  )
}

export default MathsArticleList

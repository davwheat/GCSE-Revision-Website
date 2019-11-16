import React from "react"

import ArticleList from "../../../../../templates/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Ad from "../../../../../components/Advert"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const ChemTopic1ArticleList = () => {
  return (
    <Layout>
      <SEO title="Chemistry: Atomic Structure & the Periodic Table" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Chemistry", href: "subjects/science/chemistry" },
          { label: "Topics", href: "subjects/science/chemistry/topics" },
          { label: "Topic 1 - Atomic Structure and the Periodic Table" },
        ]}
      />
      <H1 gutterBottom>
        Chemistry, Topic 1: Atomic Structure &amp; the Periodic Table
      </H1>
      <ArticleList
        subject="chemistry"
        topic="topic 1 - atomic structure and the periodic table"
      />
      <Ad />
    </Layout>
  )
}

export default ChemTopic1ArticleList

import React from "react"
import ArticleList from "../../../../templates/Lists/Computing/ArticleList"
import Layout from "../../../../components/layout"
import SEO from "../../../../components/seo"
import Breadcrumbs from "../../../../components/Breadcrumbs"
import { H1 } from "../../../../components/EasyText"

const MathsArticleList = () => {
  return (
    <Layout>
      <SEO title="Computer Science, Topic 4 Articles" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Computer Science", href: "subjects/computer-science" },
          { label: "Topics", href: "subjects/computer-science/topics" },
          { label: "Topic 4: Computer Systems" },
        ]}
      />

      <H1 gutterBottom>Computing, Topic 4: Computer Systems</H1>
      <ArticleList subject="computer science" topic="computer systems" />
    </Layout>
  )
}

export default MathsArticleList

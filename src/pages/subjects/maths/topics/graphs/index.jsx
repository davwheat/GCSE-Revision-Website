import React from "react"
import ArticleList from "../../../../../templates/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const MathsTrigArticleList = () => {
  return (
    <Layout>
      <SEO title="Maths: Graphs" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Maths", href: "subjects/maths" },
          { label: "Topics", href: "subjects/maths/topics" },
          { label: "Graphs" },
        ]}
      />
      <H1 gutterBottom>Maths: Graphs articles</H1>
      <ArticleList subject="maths" topic="graphs" />
    </Layout>
  )
}

export default MathsTrigArticleList

import React from "react"
import ArticleList from "../../../../templates/Lists/Maths/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const MathsArticleList = () => {
  return (
    <Layout>
      <SEO title="Maths: Calculator Articles" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Maths", href: "subjects/maths" },
          { label: "Topics", href: "subjects/maths/topics" },
          { label: "Calculator Articles" },
        ]}
      />

      <H1 gutterBottom>Maths: calculator articles</H1>
      <ArticleList
        subject="maths"
        topic="calculators"
        backUrl="subjects/maths/topics"
      />
    </Layout>
  )
}

export default MathsArticleList

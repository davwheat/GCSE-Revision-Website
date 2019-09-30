import React from "react"
import ArticleList from "../../../templates/ArticleList"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const MathsArticleList = () => {
  return (
    <Layout>
      <SEO title="Maths Articles" />
      <ArticleList subject="maths" backUrl="/subjects/maths" />
    </Layout>
  )
}

export default MathsArticleList

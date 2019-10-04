import React from "react"
import ArticleList from "../../../templates/ArticleList"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Ad from "../../../components/Advert"

const MathsArticleList = () => {
  return (
    <Layout>
      <SEO title="Maths Articles" />
      <ArticleList subject="maths" backUrl="/subjects/maths" />
      <Ad />
    </Layout>
  )
}

export default MathsArticleList

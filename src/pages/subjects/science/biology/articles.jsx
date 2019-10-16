import React from "react"
import ArticleList from "../../../../templates/ArticleList"
import Layout from "../../../../components/layout"
import SEO from "../../../../components/seo"
import Ad from "../../../../components/Advert"

const BiologyArticleList = () => {
  return (
    <Layout>
      <SEO title="Biology Articles" />
      <ArticleList
        subject="biology"
        backUrl="/subjects/science/biology"
        subjectGroup="science"
      />
      <Ad />
    </Layout>
  )
}

export default BiologyArticleList

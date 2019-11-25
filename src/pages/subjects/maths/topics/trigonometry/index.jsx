import React from "react"
import ArticleList from "../../../../../templates/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Ad from "../../../../../components/Advert"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const MathsTrigArticleList = () => {
  return (
    <Layout>
      <SEO title="Maths: Trigonometry Articles" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Maths", href: "subjects/maths" },
          { label: "Topics", href: "subjects/maths/topics" },
          { label: "Trigonometry Articles" },
        ]}
      />
      <H1 gutterBottom>Maths: Trigonometry articles</H1>
      <ArticleList subject="maths" topic="trigonometry" />
      <Ad />
    </Layout>
  )
}

export default MathsTrigArticleList
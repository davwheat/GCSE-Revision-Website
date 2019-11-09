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
      <SEO title="Maths: Calculator Articles" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Maths", href: "/subjects/maths" },
          { label: "Topics", href: "/subjects/maths/topics" },
          { label: "Calculator Articles" },
        ]}
      />
      <H1 gutterBottom>Maths: subject knowledge articles</H1>
      <ArticleList
        subject="maths"
        topic="calculators"
        backUrl="/subjects/maths/topics"
      />
      <Ad />
    </Layout>
  )
}

export default MathsArticleList

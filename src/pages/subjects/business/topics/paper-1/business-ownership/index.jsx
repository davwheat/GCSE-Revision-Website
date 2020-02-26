import React from "react"

import ArticleList from "../../../../../../templates/ArticleList"
import Layout from "../../../../../../components/layout"
import SEO from "../../../../../../components/seo"
import Breadcrumbs from "../../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../../components/EasyText"

const BusinessArticleList = () => {
  return (
    <Layout>
      <SEO title="Business: Business Planning" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Business", href: "subjects/business" },
          { label: "Topics", href: "subjects/business/topics" },
          { label: "Paper 1", href: "subjects/business/topics/paper-1" },
          { label: "Business Planning" },
        ]}
      />
      <H1 gutterBottom>Business: Business Planning</H1>
      <ArticleList
        subject="business"
        topic="paper 1"
        subtopic="business planning"
      />
    </Layout>
  )
}

export default BusinessArticleList

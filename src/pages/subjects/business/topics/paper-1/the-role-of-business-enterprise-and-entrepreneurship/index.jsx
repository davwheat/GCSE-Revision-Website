import React from "react"

import ArticleList from "../../../../../../templates/ArticleList"
import Layout from "../../../../../../components/layout"
import SEO from "../../../../../../components/seo"
import Breadcrumbs from "../../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../../components/EasyText"

const BusinessArticleList = () => {
  return (
    <Layout>
      <SEO title="Business: Business Enterprise and Entrepreneurship" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Business", href: "subjects/business" },
          { label: "Topics", href: "subjects/business/topics" },
          { label: "Paper 1", href: "subjects/business/topics/paper-1" },
          { label: "The Role of Business Enterprise and Entrepreneurship" },
        ]}
      />
      <H1 gutterBottom>
        Business: The Role of Business Enterprise and Entrepreneurship
      </H1>
      <ArticleList
        subject="business"
        topic="paper 1"
        subtopic="the role of business enterprise and entrepreneurship"
      />
    </Layout>
  )
}

export default BusinessArticleList

import React from "react"

import Layout from "../../../../../../components/layout"
import SEO from "../../../../../../components/seo"
import Breadcrumbs from "../../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../../components/EasyText"
import ArticleList from "../../../../../../templates/ArticleList"

const EnglishLitACCTechniquesArticleList = () => {
  return (
    <Layout>
      <SEO title="English Literature: Dickens' Techniques" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Literature", href: "subjects/english/english-literature" },
          {
            label: "A Christmas Carol",
            href:
              "subjects/english/english-literature/topics/a-christmas-carol",
          },
          { label: "Dickens' Techniques" },
        ]}
      />
      <H1 gutterBottom>English Literature: Dickens&apos; Techniques</H1>
      <ArticleList
        subject="english literature"
        topic="a christmas carol"
        subtopic="dickens' techniques"
      />
    </Layout>
  )
}

export default EnglishLitACCTechniquesArticleList

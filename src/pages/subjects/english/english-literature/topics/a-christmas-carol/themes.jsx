import React from "react"

import Layout from "../../../../../../components/layout"
import SEO from "../../../../../../components/seo"
import Breadcrumbs from "../../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../../components/EasyText"
import ArticleList from "../../../../../../templates/Lists/English Literature/ArticleList"

const EnglishLitACCThemesArticleList = () => {
  return (
    <Layout>
      <SEO title="English Literature: A Christmas Carol Themes" />
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
          { label: "Themes" },
        ]}
      />
      <H1 gutterBottom>English Literature: A Christmas Carol Themes</H1>
      <ArticleList
        subject="english literature"
        topic="a christmas carol"
        subtopic="themes"
      />
    </Layout>
  )
}

export default EnglishLitACCThemesArticleList

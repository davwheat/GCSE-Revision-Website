import React from "react"

import Layout from "../../../../../../components/layout"
import SEO from "../../../../../../components/seo"
import Breadcrumbs from "../../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../../components/EasyText"
import ArticleList from "../../../../../../templates/Lists/English Literature/ArticleList"

const EnglishLitMacbethThemesArticleList = () => {
  return (
    <Layout>
      <SEO title="English Literature: Macbeth Themes" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Literature", href: "subjects/english/english-literature" },
          {
            label: "Macbeth",
            href: "subjects/english/english-literature/topics/macbeth",
          },
          { label: "Themes" },
        ]}
      />
      <H1 gutterBottom>English Literature: Macbeth Themes</H1>
      <ArticleList
        subject="english literature"
        topic="macbeth"
        subtopic="themes"
      />
    </Layout>
  )
}

export default EnglishLitMacbethThemesArticleList

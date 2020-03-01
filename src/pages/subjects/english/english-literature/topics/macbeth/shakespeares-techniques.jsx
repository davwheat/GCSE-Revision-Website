import React from "react"

import Layout from "../../../../../../components/layout"
import SEO from "../../../../../../components/seo"
import Breadcrumbs from "../../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../../components/EasyText"
import ArticleList from "../../../../../../templates/Lists/English Literature/ArticleList"

const EnglishLitMacbethCharactersArticleList = () => {
  return (
    <Layout>
      <SEO title="English Literature: Shakespeare's Techniques" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Literature", href: "subjects/english/english-literature" },
          {
            label: "Macbeth",
            href: "subjects/english/english-literature/topics/macbeth",
          },
          { label: "Shakespeare's Techniques" },
        ]}
      />
      <H1 gutterBottom>English Literature: Shakespeare&apos;s Techniques</H1>
      <ArticleList
        subject="english literature"
        topic="macbeth"
        subtopic="shakespeare's techniques"
      />
    </Layout>
  )
}

export default EnglishLitMacbethCharactersArticleList

import React from "react"

import Layout from "../../../../../../components/layout"
import SEO from "../../../../../../components/seo"
import Breadcrumbs from "../../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../../components/EasyText"
import ArticleList from "../../../../../../templates/ArticleList"

const EnglishLitMacbethCharactersArticleList = () => {
  return (
    <Layout>
      <SEO title="English Literature: Macbeth Characters" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Literature", href: "subjects/english/english-literature" },
          { label: "Macbeth", href: "subjects/english/english-literature/topics/macbeth" },
          { label: "Characters" },
        ]}
      />
      <H1 gutterBottom>English Literature: Macbeth Characters</H1>
      <ArticleList subject="english literature" topic="macbeth" subtopic="characters" />
    </Layout>
  )
}

export default EnglishLitMacbethCharactersArticleList

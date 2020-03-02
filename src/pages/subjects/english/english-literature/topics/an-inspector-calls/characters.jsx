import React from "react"

import Layout from "../../../../../../components/layout"
import SEO from "../../../../../../components/seo"
import Breadcrumbs from "../../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../../components/EasyText"
import ArticleList from "../../../../../../templates/Lists/English Literature/ArticleList"

const EnglishLitMacbethCharactersArticleList = () => {
  return (
    <Layout>
      <SEO title="English Literature: An Inspector Calls Characters" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Literature", href: "subjects/english/english-literature" },
          {
            label: "An Inspector Calls",
            href:
              "subjects/english/english-literature/topics/an-inspector-calls",
          },
          { label: "Characters" },
        ]}
      />
      <H1 gutterBottom>English Literature: An Inspector Calls Characters</H1>
      <ArticleList
        subject="english literature"
        topic="an inspector calls"
        subtopic="characters"
      />
    </Layout>
  )
}

export default EnglishLitMacbethCharactersArticleList

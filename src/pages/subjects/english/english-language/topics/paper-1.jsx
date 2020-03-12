import React from "react"

import ArticleList from "../../../../../templates/Lists/English Language/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const EnglishLangPaper1ArticleList = () => {
  return (
    <Layout>
      <SEO title="English Language: Paper 1" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Language", href: "subjects/english/english-language" },
          { label: "Paper 1" },
        ]}
      />
      <H1 gutterBottom>English Language: Paper 1</H1>
      <ArticleList subject="english language" topic="paper 1" />
    </Layout>
  )
}

export default EnglishLangPaper1ArticleList

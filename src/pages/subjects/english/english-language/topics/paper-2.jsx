import React from "react"

import ArticleList from "../../../../../templates/Lists/English Language/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const EnglishLangPaper2ArticleList = () => {
  return (
    <Layout>
      <SEO title="English Language: Paper 2" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Language", href: "subjects/english/english-language" },
          { label: "Paper 2" },
        ]}
      />
      <H1 gutterBottom>English Language: Paper 2</H1>
      <ArticleList subject="english language" topic="paper 2" />
    </Layout>
  )
}

export default EnglishLangPaper2ArticleList

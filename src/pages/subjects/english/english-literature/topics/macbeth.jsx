import React from "react"

import ArticleList from "../../../../../templates/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Ad from "../../../../../components/Advert"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const EnglishLitMacbethArticleList = () => {
  return (
    <Layout>
      <SEO title="English Literature: Macbeth" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Literature", href: "subjects/english/english-literature" },
          { label: "Macbeth" },
        ]}
      />
      <H1 gutterBottom>English Literature: Macbeth</H1>
      <ArticleList subject="english literature" topic="macbeth" />
      <Ad />
    </Layout>
  )
}

export default EnglishLitMacbethArticleList

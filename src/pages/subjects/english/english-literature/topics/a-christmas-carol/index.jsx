import React from "react"

import SubTopicList from "../../../../../../templates/SubTopicList"
import Layout from "../../../../../../components/layout"
import SEO from "../../../../../../components/seo"
import Breadcrumbs from "../../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../../components/EasyText"

const EnglishLitACCArticleList = () => {
  return (
    <Layout>
      <SEO title="English Literature: A Christmas Carol" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Literature", href: "subjects/english/english-literature" },
          { label: "A Christmas Carol" },
        ]}
      />
      <H1 gutterBottom>English Literature: A Christmas Carol</H1>
      <SubTopicList
        subjectGroup="english"
        subject="english literature"
        topic="a christmas carol"
      />
    </Layout>
  )
}

export default EnglishLitACCArticleList

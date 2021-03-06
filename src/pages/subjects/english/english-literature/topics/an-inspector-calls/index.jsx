import React from "react"

import SubTopicList from "../../../../../../templates/Lists/English Literature/SubTopicList"
import Layout from "../../../../../../components/layout"
import SEO from "../../../../../../components/seo"
import Breadcrumbs from "../../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../../components/EasyText"

const EnglishLitMacbethArticleList = () => {
  return (
    <Layout>
      <SEO title="English Literature: An Inspector Calls" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Literature", href: "subjects/english/english-literature" },
          { label: "An Inspector Calls" },
        ]}
      />
      <H1 gutterBottom>English Literature: An Inspector Calls</H1>
      <SubTopicList
        subjectGroup="english"
        subject="english literature"
        topic="an inspector calls"
      />
    </Layout>
  )
}

export default EnglishLitMacbethArticleList

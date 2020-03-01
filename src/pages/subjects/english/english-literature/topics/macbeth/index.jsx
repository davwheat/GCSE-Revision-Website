import React from "react"

import SubTopicList from "../../../../../../templates/Lists/English Literature/SubTopicList"
import Layout from "../../../../../../components/layout"
import SEO from "../../../../../../components/seo"
import Breadcrumbs from "../../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../../components/EasyText"

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
      <SubTopicList
        subjectGroup="english"
        subject="english literature"
        topic="macbeth"
      />
    </Layout>
  )
}

export default EnglishLitMacbethArticleList

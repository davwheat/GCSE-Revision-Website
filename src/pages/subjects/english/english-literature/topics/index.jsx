import React from "react"

import Layout from "../../../../../components/layout"
import TopicList from "../../../../../templates/TopicList"
import { H1 } from "../../../../../components/EasyText"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { Descriptions } from "../../../../../constants/subjectInfo"

const EnglishLitTopics = () => {
  return (
    <Layout>
      <SEO
        title="English Literature"
        description={Descriptions["English Literature"]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Literature", href: "subjects/english/english-literature" },
          { label: "Topics" },
        ]}
      />
      <H1 gutterBottom>English Literature</H1>
      <TopicList subject="english literature" subjectGroup="english" />
    </Layout>
  )
}

export default EnglishLitTopics

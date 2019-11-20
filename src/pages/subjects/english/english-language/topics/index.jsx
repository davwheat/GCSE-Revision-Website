import React from "react"

import Layout from "../../../../../components/layout"

import TopicList from "../../../../../templates/TopicList"

import { H1 } from "../../../../../components/EasyText"
import SEO from "../../../../../components/seo"
import Ad from "../../../../../components/Advert"
import Breadcrumbs from "../../../../../components/Breadcrumbs"

import { Descriptions } from "../../../../../constants/subjectInfo"

const EnglishLangTopics = () => {
  return (
    <Layout>
      <SEO
        title="English Language"
        description={Descriptions["English Language"]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Language", href: "subjects/english/english-language" },
          { label: "Topics" },
        ]}
      />
      <H1 gutterBottom>English Language</H1>
      <TopicList subject="english language" subjectGroup="english" />
      <Ad />
    </Layout>
  )
}

export default EnglishLangTopics

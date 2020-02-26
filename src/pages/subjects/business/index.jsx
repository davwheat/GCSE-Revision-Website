import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H2, P } from "../../../components/EasyText"
import TopicList from "../../../templates/TopicList"
import Breadcrumbs from "../../../components/Breadcrumbs"

import { Descriptions } from "../../../constants/subjectInfo"

const SubjectsBusinessPage = () => {
  return (
    <Layout>
      <SEO
        title="Business"
        description={Descriptions["Business"]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "" }, { label: "Business" }]} />
      <H1 gutterBottom>Business</H1>
      <P paragraph>{Descriptions["Business"]}</P>
      <H2 gutterBottom>Topics</H2>
      <TopicList subject="business" />
    </Layout>
  )
}

export default SubjectsBusinessPage

import React from "react"

import Layout from "../../../../../components/layout"

import TopicList from "../../../../../templates/TopicList"

import { H1 } from "../../../../../components/EasyText"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"

const PhysicsTopicList = () => {
  return (
    <Layout>
      <SEO title="Physics Topics" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Physics", href: "subjects/science/physics" },
          { label: "Topics" },
        ]}
      />

      <H1 gutterBottom>Physics Topics</H1>
      <TopicList subject="physics" subjectGroup="science" />
    </Layout>
  )
}

export default PhysicsTopicList

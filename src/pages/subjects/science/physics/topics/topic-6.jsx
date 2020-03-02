import React from "react"

import ArticleList from "../../../../../templates/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const PhysicsTopic6ArticleList = () => {
  return (
    <Layout>
      <SEO title="Physics: Waves" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Physics", href: "subjects/science/physics" },
          { label: "Topics", href: "subjects/science/physics/topics" },
          { label: "Topic 6: Waves" },
        ]}
      />
      <H1 gutterBottom>Physics, Topic 6: Waves</H1>
      <ArticleList subject="physics" topic="topic 6: waves" />
    </Layout>
  )
}

export default PhysicsTopic6ArticleList

import React from "react"

import ArticleList from "../../../../../templates/Lists/Physics/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const PhysicsTopic8ArticleList = () => {
  return (
    <Layout>
      <SEO title="Physics: Waves" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Physics", href: "subjects/science/physics" },
          { label: "Topics", href: "subjects/science/physics/topics" },
          { label: "Topic 8: Space Physics" },
        ]}
      />
      <H1 gutterBottom>Physics, Topic 8: Space Physics</H1>
      <ArticleList subject="physics" topic="topic 8: space physics" />
    </Layout>
  )
}

export default PhysicsTopic8ArticleList

import React from "react"

import ArticleList from "../../../../../templates/ArticleList"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import Ad from "../../../../../components/Advert"
import Breadcrumbs from "../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../components/EasyText"

const PhysicsTopic2ArticleList = () => {
  return (
    <Layout>
      <SEO title="Physics: Electricity" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Physics", href: "subjects/science/physics" },
          { label: "Topics", href: "subjects/science/physics/topics" },
          { label: "Topic 2 - Electricity" },
        ]}
      />
      <H1 gutterBottom>Physics, Topic 2: Electricity</H1>
      <ArticleList subject="physics" topic="topic 2 - electricity" />
      <Ad />
    </Layout>
  )
}

export default PhysicsTopic2ArticleList

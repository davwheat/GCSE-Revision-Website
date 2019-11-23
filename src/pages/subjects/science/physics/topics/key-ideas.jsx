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
      <SEO title="Physics: Key Ideas" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Physics", href: "subjects/science/physics" },
          { label: "Topics", href: "subjects/science/physics/topics" },
          { label: "Key Ideas" },
        ]}
      />
      <H1 gutterBottom>Physics: Key Ideas</H1>
      <ArticleList subject="physics" topic="key ideas" />
      <Ad />
    </Layout>
  )
}

export default PhysicsTopic2ArticleList

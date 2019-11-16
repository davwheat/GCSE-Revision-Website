import React from "react"

import Layout from "../../../../components/layout"

import TopicList from "../../../../templates/TopicList"

import { H1 } from "../../../../components/EasyText"
import SEO from "../../../../components/seo"
import Ad from "../../../../components/Advert"
import Breadcrumbs from "../../../../components/Breadcrumbs"

const MathsArticleList = () => {
  return (
    <Layout>
      <SEO title="Maths Topics" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Maths", href: "subjects/maths" },
          { label: "Topics" },
        ]}
      />

      <H1 gutterBottom>Maths Topics</H1>
      <TopicList subject="maths" backUrl="subjects/maths" />
      <Ad />
    </Layout>
  )
}

export default MathsArticleList

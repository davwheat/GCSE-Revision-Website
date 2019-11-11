import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H2, P } from "../../../components/EasyText"
import TopicList from "../../../templates/TopicList"
import Breadcrumbs from "../../../components/Breadcrumbs"
import Ad from "../../../components/Advert"

import { Descriptions } from "../../../constants/subjectInfo"

const SubjectsMathsPage = () => {
  return (
    <Layout>
      <SEO
        title="Maths"
        description="Our site provides useful tips and tricks to help you make the most of your calculator as well as maths quizzes and articles on harder topics."
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Maths" }]} />
      <H1 gutterBottom>Maths</H1>
      <P paragraph>{Descriptions["Maths"]}</P>
      <H2 gutterBottom>Topics</H2>
      <TopicList subject="maths" />
      <Ad />
    </Layout>
  )
}

export default SubjectsMathsPage

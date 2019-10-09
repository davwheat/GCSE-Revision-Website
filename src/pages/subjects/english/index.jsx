import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H6, H3 } from "../../../components/EasyText"
import Breadcrumbs from "../../../components/Breadcrumbs"
import Ad from "../../../components/Advert"

import WordOfTheDay from "../../../components/WordOfTheDay"

import { Descriptions } from "../../../constants/subjectInfo"

const SubjectsEnglishPage = () => {
  return (
    <Layout>
      <SEO title="English" />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "English" }]}
      />
      <H1 gutterBottom>English</H1>
      <H6 component="p" paragraph>
        {Descriptions["English"]}
      </H6>
      <br />
      <H3 component="h2">Word of the day</H3>
      <br />
      <WordOfTheDay />
      <Ad />
    </Layout>
  )
}

export default SubjectsEnglishPage

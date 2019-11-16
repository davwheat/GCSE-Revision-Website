import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H2, P } from "../../../components/EasyText"
import Breadcrumbs from "../../../components/Breadcrumbs"
import Ad from "../../../components/Advert"

import WordOfTheDay from "../../../components/WordOfTheDay"

import { Descriptions } from "../../../constants/subjectInfo"

const SubjectsEnglishPage = () => {
  return (
    <Layout>
      <SEO title="English" />
      <Breadcrumbs
        items={[{ label: "Home", href: "" }, { label: "English" }]}
      />
      <H1 gutterBottom>English</H1>
      <P paragraph>
        {Descriptions["English"]}
      </P>
      <br />
      <H2>Word of the day</H2>
      <br />
      <WordOfTheDay />
      <Ad />
    </Layout>
  )
}

export default SubjectsEnglishPage

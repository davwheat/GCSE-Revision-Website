import React from "react"

import SubTopicList from "../../../../../../templates/Lists/English Literature/SubTopicList"
import Layout from "../../../../../../components/layout"
import SEO from "../../../../../../components/seo"
import Breadcrumbs from "../../../../../../components/Breadcrumbs"
import { H1 } from "../../../../../../components/EasyText"

const EnglishLitPowerAndConflictThemesArticleList = () => {
  return (
    <Layout>
      <SEO title="English Literature: Power & Conflict Poetry Themes" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Literature", href: "subjects/english/english-literature" },
          {
            label: "Power & Conflict",
            href:
              "subjects/english/english-literature/topics/power-and-conflict",
          },
          { label: "Themes" },
        ]}
      />
      <H1 gutterBottom>English Literature: Power &amp; Conflict</H1>
      <SubTopicList
        subjectGroup="english"
        subject="english literature"
        topic="power and conflict"
      />
    </Layout>
  )
}

export default EnglishLitPowerAndConflictThemesArticleList

import React from "react"

import Layout from "../../../../components/layout"
import SEO from "../../../../components/seo"
import { H1, H2, H3, P } from "../../../../components/EasyText"
import Breadcrumbs from "../../../../components/Breadcrumbs"
import Ad from "../../../../components/Advert"
import TopicList from "../../../../templates/TopicList"

import { Descriptions } from "../../../../constants/subjectInfo"
import Link from "../../../../components/Link"

const SubjectsBiologyPage = () => {
  return (
    <Layout>
      <SEO
        title="English Language"
        description={Descriptions["English Language"]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Language" },
        ]}
      />
      <H1 gutterBottom>English Language</H1>
      <P paragraph>{Descriptions["English Language"]}</P>
      <H2 gutterBottom>How are you assessed?</H2>
      <P paragraph>
        In English Language, you will be assessed with <strong>2 papers</strong>
        . Each exam lasts <strong>1 hour 45 minutes</strong> each and is worth{" "}
        <strong>80 marks</strong>.
      </P>
      <P paragraph>
        In <strong>Paper 1</strong>, you will be assessed on your{" "}
        <strong>Explorations in Creative Reading and Writing</strong>.
      </P>
      <P paragraph>
        In <strong>Paper 2</strong>, you will be assessed on{" "}
        <strong>Writers&apos; Viewpoints and Perspectives</strong> in
        non-fiction writing.
      </P>
      <P paragraph>
        For full information, see AQA&apos;s{" "}
        <Link to="https://www.aqa.org.uk/subjects/english/gcse/english-language-8700/specification-at-a-glance">
          Specification at a glance
        </Link>{" "}
        page.
      </P>
      <H2 gutterBottom>Papers</H2>
      <TopicList subject="english language" subjectGroup="english" />
      <Ad />
    </Layout>
  )
}

export default SubjectsBiologyPage

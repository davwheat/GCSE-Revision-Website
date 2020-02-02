import React from "react"

import Layout from "../../../../components/layout"

import TopicList from "../../../../templates/TopicList"

import { H1, P, H2 } from "../../../../components/EasyText"
import SEO from "../../../../components/seo"
import Breadcrumbs from "../../../../components/Breadcrumbs"

const ComputingArticleList = () => {
  return (
    <Layout>
      <SEO title="Computing Topics" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Computer Science", href: "subjects/computer-science" },
          { label: "Topics" },
        ]}
      />

      <H1 gutterBottom>Computer Science Topics</H1>

      <P paragraph>
        AQA Computer Science consists of <strong>2 exam papers</strong> and a{" "}
        <strong>programming project</strong>.
      </P>

      <H2 gutterBottom>Paper 1</H2>

      <P paragraph>
        Paper 1 is work 80 marks (50% of your GCSE), and lasts for 1 hour 30
        minutes.
      </P>
      <P paragraph>
        It's a mix of multiple choice, short answer, long answer questions which
        aim to assess your practical problem solving and computational thinking
        skills.
      </P>

      <H2 gutterBottom>Paper 2</H2>

      <P paragraph>
        Paper 2 is work 80 marks (50% of your GCSE), and lasts for 1 hour 30
        minutes.
      </P>
      <P paragraph>
        It's a mix of multiple choice, short answer, long answer, and extended
        response style questions which aim to assess your theoretical knowledge.
      </P>

      <TopicList subject="computer science" />
    </Layout>
  )
}

export default ComputingArticleList

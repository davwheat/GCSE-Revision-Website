import React from "react"

import Layout from "../../../../components/layout"
import SEO from "../../../../components/seo"
import { H1, H2, H3, P } from "../../../../components/EasyText"
import Breadcrumbs from "../../../../components/Breadcrumbs"
import TopicList from "../../../../templates/TopicList"

import { Descriptions } from "../../../../constants/subjectInfo"
import Link from "../../../../components/Link"

const SubjectsBiologyPage = () => {
  return (
    <Layout>
      <SEO title="Biology" description={Descriptions["Biology"]} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Biology" },
        ]}
      />
      <H1 gutterBottom>Biology</H1>
      <P paragraph>{Descriptions["Biology"]}</P>
      <H2 gutterBottom>How are you assessed?</H2>
      <H3 gutterBottom>Triple/Single Science</H3>
      <P paragraph>
        In Triple Science, you will be assessed with <strong>2 papers</strong>.
        Each exam lasts <strong>1 hour 45 minutes</strong> each and is worth{" "}
        <strong>100 marks</strong>. Based on the &quot;1 mark per minute&quot;
        rule, you should have at least 5 minutes at the end of the paper to
        check your work, but it is more than likely you will have longer.
      </P>
      <P paragraph>
        In <strong>Paper 1</strong>, you will be assessed on topics 1-4: Cell
        biology; Organisation; Infection and response; and Bioenergetics.
      </P>
      <P paragraph>
        In <strong>Paper 2</strong>, you will be assessed on topics 5-7:
        Homeostasis and response; Inheritance; Variation and evolution; and
        Ecology.
      </P>
      <P paragraph>
        <strong>
          Remember that you can be assessed on the <em>Key Ideas</em> in both
          papers.
        </strong>
      </P>
      <P paragraph>
        For full information, see AQA&apos;s{" "}
        <Link to="https://www.aqa.org.uk/subjects/science/gcse/biology-8461/specification-at-a-glance">
          Specification at a glance
        </Link>{" "}
        page.
      </P>
      <H2 gutterBottom>Topics</H2>
      <TopicList subject="biology" subjectGroup="science" />
    </Layout>
  )
}

export default SubjectsBiologyPage

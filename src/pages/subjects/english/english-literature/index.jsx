import React from "react"

import Layout from "../../../../components/layout"
import SEO from "../../../../components/seo"
import { H1, H2, P, P2 } from "../../../../components/EasyText"
import Breadcrumbs from "../../../../components/Breadcrumbs"
import TopicList from "../../../../templates/TopicList"

import { Descriptions } from "../../../../constants/subjectInfo"
import Link from "../../../../components/Link"

const SubjectsBiologyPage = () => {
  return (
    <Layout>
      <SEO
        title="English Literature"
        description={Descriptions["English Literature"]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "English", href: "subjects/english" },
          { label: "Literature" },
        ]}
      />
      <H1 gutterBottom>English Literature</H1>
      <P paragraph>{Descriptions["English Literature"]}</P>
      <P2 paragraph>
        Note that this site only contains content for the most common literature
        option of Macbeth, An Inspector Calls, A Christmas Carol, and Power and
        Conflict poetry. For other options, check other resources, such as BBC
        Bitesize or Mr Bruff's YouTube channel.
      </P2>
      <H2 gutterBottom>How are you assessed?</H2>
      <P paragraph>
        In English Literature, you will be assessed with{" "}
        <strong>2 papers</strong>. Paper 1 lasts{" "}
        <strong>1 hour 45 minutes</strong>. Paper 2 lasts{" "}
        <strong>2 hours 15 minutes</strong>.
      </P>
      <P paragraph>
        In <strong>Paper 1</strong>, you will be assessed on your knowledge of
        your chosen <strong>Shakespeare play and 19th-century novel</strong>. It
        is worth a total of 64 marks or 40% of your GCSE.
      </P>
      <P paragraph>
        In <strong>Paper 2</strong>, you will be assessed on your knowledge of
        your chosen{" "}
        <strong>
          Modern prose/drama text, poetry anthology, and unseen poetry
        </strong>
        . It is worth a total of 96 marks or 60% of your GCSE.
      </P>
      <P paragraph>
        For full information, see AQA&apos;s{" "}
        <Link to="https://www.aqa.org.uk/subjects/english/gcse/english-literature-8702/specification-at-a-glance">
          Specification at a glance
        </Link>{" "}
        page.
      </P>
      <H2 gutterBottom>Topics</H2>
      <TopicList subject="english literature" subjectGroup="english" />
    </Layout>
  )
}

export default SubjectsBiologyPage

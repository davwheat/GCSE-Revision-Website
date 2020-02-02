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
      <SEO title="Chemistry" description={Descriptions["Chemistry"]} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Chemistry" },
        ]}
      />
      <H1 gutterBottom>Chemistry</H1>
      <P paragraph>{Descriptions["Chemistry"]}</P>
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
        In <strong>Paper 1</strong>, you will be assessed on topics 1-5: Atomic
        structure and the periodic table; Bonding, structure, and the properties
        of matter; Quantitative chemistry, Chemical changes; and Energy changes.
      </P>
      <P paragraph>
        In <strong>Paper 2</strong>, you will be assessed on topics 6-10: The
        rate and extent of chemical change; Organic chemistry; Chemical
        analysis, Chemistry of the atmosphere; and Using resources.
      </P>
      <P paragraph>
        <strong>
          Remember that you can be assessed on the <em>Key Ideas</em> in both
          papers.
        </strong>
      </P>
      <P paragraph>
        For full information, see AQA&apos;s{" "}
        <Link to="https://www.aqa.org.uk/subjects/science/gcse/chemistry-8462/specification-at-a-glance">
          Specification at a glance
        </Link>{" "}
        page.
      </P>
      <H2 gutterBottom>Topics</H2>
      <TopicList subject="chemistry" subjectGroup="science" />
    </Layout>
  )
}

export default SubjectsBiologyPage

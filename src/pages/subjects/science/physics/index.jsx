import React from "react"

import Layout from "../../../../components/layout"
import SEO from "../../../../components/seo"
import { H1, H2, H3, P } from "../../../../components/EasyText"
import Breadcrumbs from "../../../../components/Breadcrumbs"
import TopicList from "../../../../templates/Lists/Physics/TopicList"

import { Descriptions } from "../../../../constants/subjectInfo"
import Link from "../../../../components/Link"

const SubjectsBiologyPage = () => {
  return (
    <Layout>
      <SEO title="Physics" description={Descriptions["Physics"]} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Science", href: "subjects/science" },
          { label: "Physics" },
        ]}
      />
      <H1 gutterBottom>Physics</H1>
      <P paragraph>{Descriptions["Physics"]}</P>
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
        In <strong>Paper 1</strong>, you will be assessed on topics 1-4: Energy;
        Electricity; Particle Model of matter; and Atomic structure.
      </P>
      <P paragraph>
        In <strong>Paper 2</strong>, you will be assessed on topics 5-8: Forces;
        Waves; Magnetism and electromagnetism; Space physics.
      </P>
      <P paragraph>
        <em>
          Questions in Paper 2 may draw on an understanding of energy changes
          and transfers due to heating, mechanical and electrical work and the
          concept of energy conservation from Energy and Electricity.
        </em>
      </P>
      <P paragraph>
        <em>
          For both papers, you must know the appropriate formulae, which you can
          see under the &quot;Key Ideas&quot; topic.
        </em>
      </P>
      <P paragraph>
        For full information, see AQA&apos;s{" "}
        <Link to="https://www.aqa.org.uk/subjects/science/gcse/physics-8463/specification-at-a-glance">
          Specification at a glance
        </Link>{" "}
        page.
      </P>
      <H2 gutterBottom>Topics</H2>
      <TopicList subject="physics" subjectGroup="science" />
    </Layout>
  )
}

export default SubjectsBiologyPage

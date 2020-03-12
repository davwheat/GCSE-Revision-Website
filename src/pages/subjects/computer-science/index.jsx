import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H2, P } from "../../../components/EasyText"
import Link from "../../../components/Link"
import Breadcrumbs from "../../../components/Breadcrumbs"

import { Descriptions } from "../../../constants/subjectInfo"
import TopicList from "../../../templates/Lists/Computing/TopicList"
import { BlockAdvert } from "../../../components/Ads"

const SubjectsComputingPage = () => {
  return (
    <Layout>
      <SEO title="Computing" />
      <Breadcrumbs
        items={[{ label: "Home", href: "" }, { label: "Computer Science" }]}
      />
      <H1 gutterBottom>Computing</H1>
      <P paragraph>{Descriptions["Computer Science"]}</P>

      <H2 gutterBottom>Topics</H2>
      <TopicList subject="computer science" />

      <H2 gutterBottom>Bitmap Editor</H2>
      <P paragraph>
        We offer a useful bitmap editor which you can use to make your own
        bitmaps with our interactive editor which can also turn your image into
        binary.
      </P>
      <P paragraph>
        <Link to="subjects/computer-science/bitmap-editor/">
          Open Bitmap Editor
        </Link>
      </P>

      <H2 gutterBottom component="h2">
        Base Converter
      </H2>
      <P paragraph>
        Need to convert between binary, decimal and hexadecimal? We&apos;ve got
        it covered!
      </P>
      <P paragraph>
        <Link to="subjects/computer-science/base-converter/">
          Open Base Converter
        </Link>
      </P>
      
      <BlockAdvert />
    </Layout>
  )
}

export default SubjectsComputingPage

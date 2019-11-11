import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H3, P } from "../../../components/EasyText"
import Link from "../../../components/Link"
import Breadcrumbs from "../../../components/Breadcrumbs"

import { Descriptions } from "../../../constants/subjectInfo"

const SubjectsComputingPage = () => {
  return (
    <Layout>
      <SEO title="Computing" />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Computer Science" }]}
      />
      <H1 gutterBottom>Computing</H1>
      <P paragraph>{Descriptions["Computer Science"]}</P>
      <H3 gutterBottom component="h2">
        Bitmap Editor
      </H3>
      <P paragraph>
        We offer a useful bitmap editor which you can use to make your own
        bitmaps with our interactive editor which can also turn your image into
        binary.
      </P>
      <P paragraph>
        <Link to="/subjects/computer-science/bitmap-editor/">
          Open Bitmap Editor
        </Link>
      </P>
      <H3 gutterBottom component="h2">
        Base Converter
      </H3>
      <P paragraph>
        Need to convert between binary, decimal and hexadecimal? We&apos;ve got
        it covered!
      </P>
      <P paragraph>
        <Link to="/subjects/computer-science/base-converter/">
          Open Base Converter
        </Link>
      </P>
    </Layout>
  )
}

export default SubjectsComputingPage

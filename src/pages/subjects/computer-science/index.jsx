import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H6, H3, P } from "../../../components/EasyText"
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
      <H6 component="p" paragraph>
        {Descriptions["Computer Science"]}
      </H6>
      <H3 gutterBottom component="h2">
        <Link to="/subjects/computer-science/bitmap-editor/">
          Bitmap Editor
        </Link>
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
    </Layout>
  )
}

export default SubjectsComputingPage

import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, P } from "../../../components/EasyText"
import Breadcrumbs from "../../../components/Breadcrumbs"
import BaseConverter from "../../../components/BaseConverter"

const ComputingBitmapEditorPage = () => {
  return (
    <Layout>
      <SEO title="Computing" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Computer Science", href: "/subjects/computer-science" },
          { label: "Base Converter" },
        ]}
      />
      <H1 gutterBottom>Computing Base Converter</H1>
      <br />
      <BaseConverter />
      <br />
      <br />
      <P paragraph>
        Please note that the maximum supported number is <code>9007199254740991</code>. I
        have no clue why you&apos;d ever need to calculate a number this large
        but there it is.
      </P>
    </Layout>
  )
}

export default ComputingBitmapEditorPage

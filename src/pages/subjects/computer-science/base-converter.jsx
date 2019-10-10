import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1 } from "../../../components/EasyText"
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
      <BaseConverter />
    </Layout>
  )
}

export default ComputingBitmapEditorPage

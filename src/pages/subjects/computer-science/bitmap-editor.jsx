import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1 } from "../../../components/EasyText"
import Breadcrumbs from "../../../components/Breadcrumbs"
import BitmapEditor from "../../../components/BitmapEditor"

const ComputingBitmapEditorPage = () => {
  return (
    <Layout>
      <SEO title="Computing" />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          { label: "Computer Science", href: "subjects/computer-science" },
          { label: "Bitmap Editor" },
        ]}
      />
      <H1 gutterBottom>Computing Bitmap Editor</H1>
      <BitmapEditor />
    </Layout>
  )
}

export default ComputingBitmapEditorPage

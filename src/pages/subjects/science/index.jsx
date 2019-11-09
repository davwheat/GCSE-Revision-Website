import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H6, H3, P } from "../../../components/EasyText"
import Link from "../../../components/Link"
import Breadcrumbs from "../../../components/Breadcrumbs"
import Ad from "../../../components/Advert"

import { Descriptions } from "../../../constants/subjectInfo"
import { List, ListItem, ListItemText } from "@material-ui/core"

const SubjectsSciencePage = () => {
  return (
    <Layout>
      <SEO title="Science" description={Descriptions["Science"]} />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Science" }]}
      />
      <H1 gutterBottom>Science</H1>
      <H6 component="p" paragraph>
        {Descriptions["Science"]}
      </H6>
      <H3 gutterBottom component="h2">
        Select course
      </H3>
      <List>
        <ListItem button component={Link} to="/subjects/science/biology">
          <ListItemText>Biology</ListItemText>
        </ListItem>
      </List>
      <Ad />
    </Layout>
  )
}

export default SubjectsSciencePage

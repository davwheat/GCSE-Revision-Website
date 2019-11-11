import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H2, P } from "../../../components/EasyText"
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
      <P paragraph>{Descriptions["Science"]}</P>
      <H2 gutterBottom>Select course</H2>
      <List>
        <ListItem button component={Link} to="/subjects/science/biology">
          <ListItemText>Biology</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/subjects/science/chemistry">
          <ListItemText>Chemistry</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/subjects/science/physics"
          disabled
        >
          <ListItemText>Physics</ListItemText>
        </ListItem>
      </List>
      <Ad />
    </Layout>
  )
}

export default SubjectsSciencePage

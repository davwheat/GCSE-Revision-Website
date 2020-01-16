import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { H1, H2, P } from "../../../components/EasyText"
import Breadcrumbs from "../../../components/Breadcrumbs"
import Ad from "../../../components/Advert"

import WordOfTheDay from "../../../components/WordOfTheDay"

import { Descriptions } from "../../../constants/subjectInfo"
import { List, ListItemText, ListItem } from "@material-ui/core"
import Link from "../../../components/Link"

const SubjectsEnglishPage = () => {
  return (
    <Layout>
      <SEO title="English" />
      <Breadcrumbs
        items={[{ label: "Home", href: "" }, { label: "English" }]}
      />
      <H1 gutterBottom>English</H1>
      <P paragraph>{Descriptions["English"]}</P>

      <H2 gutterBottom>Word of the day</H2>
      <WordOfTheDay />

      <H2 gutterBottom>Select subject</H2>
      <List>
        <ListItem
          button
          component={Link}
          to="subjects/english/english-language"
        >
          <ListItemText>English Language</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="subjects/english/english-literature"
        >
          <ListItemText>English Literature</ListItemText>
        </ListItem>
      </List>
      <Ad />
    </Layout>
  )
}

export default SubjectsEnglishPage

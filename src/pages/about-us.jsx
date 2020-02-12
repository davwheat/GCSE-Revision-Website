import React from "react"

import Link from "../components/Link"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { H1, P, Subtitle1 as S1 } from "../components/EasyText"
import { Divider } from "@material-ui/core"
import { BlockAdvert } from "../components/Ads"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" description="What is GCSE Revise It? Who made it? Why can I trust it?" />
    <H1 gutterBottom>About Us</H1>
    <S1 paragraph>
      <b>GCSE Revise It</b> is an <abbr title="Anyone can access the code behind it.">Open Source</abbr> revision tool
      for many different subjects. Our aim is to make simple, yet thorough,
      revision materials for everyone.
    </S1>

    <Divider variant="middle" style={{ marginBottom: 16 }} />

    <P paragraph>
      This project was originally made by a GCSE student but now anyone can
      contribute to the project via its{" "}
      <Link to="https://github.com/davwheat/GCSE-Revision-Website">
        GitHub repository
      </Link>
      . If you ever find any problems with the content on the site, any bugs
      while using the site, or any other issues, submit a bug report via the
      &apos;Feedback&apos; button from the menu on the left side of the page.
    </P>

    <P paragraph>
      There's never any sure-fire to know if you can trust a revision
      resource: you've just got to use your gut. Revision materials are
      meant to be used in combination with your own knowledge, and just as a
      guide to remind you what you've learnt. They usually won't cover
      everything that you need to know, unfortunately.
    </P>

    <P paragraph>Enjoy your revision!</P>

    <P paragraph>
      <Link to="">Go home</Link>
    </P>
    
    <BlockAdvert />
  </Layout>
)

export default AboutPage

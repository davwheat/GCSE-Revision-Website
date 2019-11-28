/* eslint-disable indent */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { useTheme, Divider } from "@material-ui/core"

import Layout from "../components/layout"
import Markdown from "../components/Markdown"
import { H1, Subtitle1, P } from "../components/EasyText"
import Breadcrumbs from "../components/Breadcrumbs"
import SEO from "../components/seo"

import ArticleTOC from "./ArticleTOC"

import {
  ConvertStringToLabel,
  ConvertStringToUrl,
  ConvertStringToTopicUrl,
} from "../functions/stringManipulations"
import PeriodicTable from "../components/PeriodicTable"
import Link from "../components/Link"

String.prototype.trimRight = function(charList) {
  if (charList === undefined) charList = "s"

  return this.replace(new RegExp("[" + charList + "]+$"), "")
}

const Article = props => {
  const post = props.data.markdownRemark

  const theme = useTheme()

  const slug = post.fields.slug

  let url = slug.trimRight("/").split("/")
  url.pop()

  const subjectUrl = ConvertStringToUrl(post.frontmatter.subject)
  const subjectLabel = ConvertStringToLabel(post.frontmatter.subject)

  const subjectGroupUrl = post.frontmatter.subjectGroup
    ? ConvertStringToUrl(post.frontmatter.subjectGroup)
    : null
  const subjectGroupLabel = subjectGroupUrl
    ? ConvertStringToLabel(post.frontmatter.subjectGroup)
    : null

  const groupBreadcrumb = subjectGroupUrl
    ? [
        {
          label: subjectGroupLabel,
          href: `subjects/${subjectGroupUrl}`,
        },
      ]
    : []

  if (subjectLabel === "Chemistry") {
    post.headings.push({
      value: "Interactive Periodic Table",
      depth: 1,
      constant: true,
    })
  }

  return (
    <Layout type="article">
      <SEO
        title={post.frontmatter.title}
        description={
          post.frontmatter.description
            ? post.frontmatter.description
            : post.excerpt
        }
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          ...groupBreadcrumb,
          {
            label: subjectLabel,
            href: `subjects/${
              subjectGroupUrl ? subjectGroupUrl + "/" : ""
            }${subjectUrl}`,
          },
          {
            label: "Topics",
            href: `subjects/${
              subjectGroupUrl ? subjectGroupUrl + "/" : ""
            }${subjectUrl}/topics`,
          },
          {
            label: ConvertStringToLabel(post.frontmatter.topic),
            href: `subjects/${
              subjectGroupUrl ? subjectGroupUrl + "/" : ""
            }${subjectUrl}/topics/${ConvertStringToTopicUrl(
              ConvertStringToUrl(post.frontmatter.topic)
            )}`,
          },
          { label: post.frontmatter.title },
        ]}
      />
      <article id="article-container">
        <H1 gutterBottom>{post.frontmatter.title}</H1>
        <Subtitle1 align="right" style={{ marginBottom: theme.spacing(4) }}>
          Published {post.frontmatter.date}
        </Subtitle1>
        <ArticleTOC headings={post.headings} />
        <Markdown src={post.rawMarkdownBody} />
      </article>
      {subjectLabel === "Chemistry" ? (
        <>
          <Divider
            variant="middle"
            style={{
              marginTop: theme.spacing(4),
              marginBottom: theme.spacing(4),
            }}
          />

          <H1 gutterBottom id="interactive-periodic-table">
            Interactive Periodic Table
          </H1>

          <PeriodicTable />
          <P paragraph style={{ marginTop: theme.spacing(2) }}>
            If this periodic table doesn&apos;t seem to work properly for you,
            you can download a PDF copy of the official AQA periodic table from{" "}
            <Link to="/files/periodic-table-insert.pdf">this link</Link>.
          </P>
        </>
      ) : null}
    </Layout>
  )
}

Article.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any,
}

export default Article

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        description
        subject
        subjectGroup
        topic
      }
      fields {
        slug
      }
      rawMarkdownBody
      excerpt
      headings {
        value
        depth
      }
    }
  }
`

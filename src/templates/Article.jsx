/* eslint-disable indent */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { useTheme } from "@material-ui/core"

import Layout from "../components/layout"
import Markdown from "../components/Markdown"
import { H1, Subtitle1 } from "../components/EasyText"
import Breadcrumbs from "../components/Breadcrumbs"
import SEO from "../components/seo"

import ArticleTOC from "./ArticleTOC"

import {
  ConvertStringToLabel,
  ConvertStringToUrl,
} from "../functions/stringManipulations"

String.prototype.trimRight = function(charlist) {
  if (charlist === undefined) charlist = "s"

  return this.replace(new RegExp("[" + charlist + "]+$"), "")
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
          href: `/subjects/${subjectGroupUrl}`,
        },
      ]
    : []

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
          { label: "Home", href: "/" },
          ...groupBreadcrumb,
          {
            label: subjectLabel,
            href: `/subjects/${
              subjectGroupUrl ? subjectGroupUrl + "/" : ""
            }${subjectUrl}`,
          },
          {
            label: "Topics",
            href: `/subjects/${
              subjectGroupUrl ? subjectGroupUrl + "/" : ""
            }${subjectUrl}/topics`,
          },
          {
            label: ConvertStringToLabel(post.frontmatter.topic),
            href: `/subjects/${
              subjectGroupUrl ? subjectGroupUrl + "/" : ""
            }${subjectUrl}/topics/${ConvertStringToUrl(
              post.frontmatter.topic
            )}`,
          },
          { label: post.frontmatter.title },
        ]}
      />
      <article id="article-container">
        <H1 gutterBottom>{post.frontmatter.title}</H1>
        <Subtitle1 align="right" style={{ marginBottom: theme.spacing(6) }}>
          Published {post.frontmatter.date}
        </Subtitle1>
        <ArticleTOC headings={post.headings} />
        <Markdown src={post.rawMarkdownBody} />
      </article>
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

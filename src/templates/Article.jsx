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

  const subjectUrl = post.frontmatter.subject.replace(" ", "-")
  const subjectLabel = post.frontmatter.subject
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ")

  const subjectGroupUrl = post.frontmatter.subjectGroup
    ? post.frontmatter.subjectGroup.replace(" ", "-")
    : null
  const subjectGroupLabel = subjectGroupUrl
    ? post.frontmatter.subjectGroup
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ")
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
            href: subjectGroupUrl
              ? `/subjects/${subjectGroupUrl}/${subjectUrl}`
              : `/subjects/${subjectUrl}`,
          },
          {
            label: "Articles",
            href: subjectGroupUrl
              ? `/subjects/${subjectGroupUrl}/${subjectUrl}/articles`
              : `/subjects/${subjectUrl}/articles`,
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

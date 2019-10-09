import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { useTheme } from "@material-ui/core"

import Layout from "../components/layout"
import Markdown from "../components/Markdown"
import { H1, Subtitle1 } from "../components/EasyText"
import Breadcrumbs from "../components/Breadcrumbs"
import SEO from "../components/seo"

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

  return (
    <Layout>
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
          { label: subjectLabel, href: `/subjects/${subjectUrl}` },
          { label: "Articles", href: `/subjects/${subjectUrl}/articles` },
          { label: post.frontmatter.title },
        ]}
      />
      <H1 gutterBottom>{post.frontmatter.title}</H1>
      <Subtitle1 align="right" style={{ marginBottom: theme.spacing(6) }}>
        Published {post.frontmatter.date}
      </Subtitle1>
      <Markdown src={post.rawMarkdownBody} />
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
      }
      fields {
        slug
      }
      rawMarkdownBody
      excerpt
    }
  }
`

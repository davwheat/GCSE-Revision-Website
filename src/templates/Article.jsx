import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Markdown from "../components/Markdown"
import { H1, Subtitle1 } from "../components/EasyText"
import { useTheme } from "@material-ui/core"

const Article = props => {
  const post = props.data.markdownRemark

  const theme = useTheme()

  return (
    <Layout>
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
      }
      rawMarkdownBody
    }
  }
`

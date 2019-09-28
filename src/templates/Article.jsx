import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { H1 } from "../components/EasyText"

const Article = props => {
  // console.log(typeof props.data)

  // const post = props.data.markdownRemark

  return (
    <Layout>
      <H1>{post.frontmatter.title}</H1>
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
      html
      frontmatter {
        title
      }
    }
  }
`

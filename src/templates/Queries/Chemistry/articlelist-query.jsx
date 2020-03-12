import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

export default function ArticleListQuery({ callback }) {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        filter: {
          frontmatter: {
            subjectGroup: { eq: "science" }
            subject: { eq: "chemistry" }
          }
        }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMM 'YY")
            description
            topic
            subtopic
            subject
          }
          wordCount {
            words
          }
          internal {
            content
          }
        }
      }
    }
  `)

  return <>{callback(data)}</>
}

ArticleListQuery.propTypes = {
  callback: PropTypes.func.isRequired,
}

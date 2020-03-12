import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

export default function TopicListQuery({ callback }) {
  const data = useStaticQuery(graphql`
    {
      topics: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: {
            subjectGroup: { eq: "science" }
            subject: { eq: "physics" }
          }
        }
      ) {
        nodes {
          frontmatter {
            topic
          }
        }
      }
    }
  `)

  const filteredData = data.topics.nodes.reduce((acc, current) => {
    let output = acc
    let topicNameMap = output.map(function(e) {
      return e.name
    })
    let index = topicNameMap.indexOf(current.frontmatter.topic)

    if (index === -1) {
      // If topic isn't in the list yet, add it!
      output.push({
        name: current.frontmatter.topic,
        articleCount: 1,
      })
    } else {
      // Increments count of articles by one
      output[index].articleCount = output[index].articleCount + 1
    }

    return output
  }, [])

  return <>{callback(filteredData)}</>
}

TopicListQuery.propTypes = {
  callback: PropTypes.func.isRequired,
}

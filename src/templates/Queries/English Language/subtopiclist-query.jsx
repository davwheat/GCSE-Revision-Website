import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

export default function SubtopicListQuery({ callback, topic }) {
  const data = useStaticQuery(graphql`
    {
      subtopics: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: {
            subjectGroup: { eq: "english" }
            subject: { eq: "english language" }
          }
        }
      ) {
        nodes {
          frontmatter {
            subtopic
            topic
          }
        }
      }
    }
  `)

  const filteredData = data.subtopics.nodes.reduce((acc, current) => {
    // skip articles if they're in the wrong topic
    if (current.frontmatter.topic !== topic) return acc

    let output = acc
    let subtopicNameMap = output.map(function(e) {
      return e.name
    })
    let index = subtopicNameMap.indexOf(current.frontmatter.subtopic)

    if (index === -1) {
      // If topic isn't in the list yet, add it!
      output.push({
        name: current.frontmatter.subtopic,
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

SubtopicListQuery.propTypes = {
  callback: PropTypes.func.isRequired,
  topic: PropTypes.string.isRequired,
}

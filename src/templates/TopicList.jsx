import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import { H1, H4, P2 } from "../components/EasyText"
import {
  Card,
  Grid,
  CardContent,
  CardActions,
  useTheme,
} from "@material-ui/core"
import Link from "../components/Link"

import {
  ConvertStringToLabel,
  ConvertStringToUrl,
} from "../functions/stringManipulations"

import ArticlesIcon from "mdi-react/NewspaperVariantMultipleOutlineIcon"

const TopicList = props => {
  const subjectLabel = props.subject
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ")

  return (
    <StaticQuery
      query={graphql`
        query {
          topics: allMarkdownRemark {
            group(field: frontmatter___topic) {
              fieldValue
              totalCount
              nodes {
                frontmatter {
                  subject
                }
              }
            }
          }
        }
      `}
      render={data => {
        const topics = data.topics.group

        return (
          <Grid container spacing={3}>
            {topics.map(topic => {
              return (
                <Grid key={topic.fieldValue} item xs={12} sm={6}>
                  <TopicCard
                    topic={topic.fieldValue}
                    articleCount={topic.totalCount}
                    subject={subjectLabel}
                  />
                </Grid>
              )
            })}
          </Grid>
        )
      }}
    />
  )
}

TopicList.propTypes = {
  subject: PropTypes.string.isRequired,
}

const TopicCard = props => {
  const { topic, subject, articleCount } = props

  const theme = useTheme()

  return (
    <Card>
      <CardContent>
        <Link
          className="no-underline"
          to={`/subjects/${ConvertStringToUrl(
            subject
          )}/topics/${ConvertStringToUrl(topic)}`}
        >
          <H4
            component="h2"
            color="primary"
            style={{ marginBottom: theme.spacing(0.75) }}
          >
            {ConvertStringToLabel(topic)}
          </H4>
        </Link>
      </CardContent>
      <CardActions disableSpacing>
        <>
          <ArticlesIcon
            aria-label="number of articles"
            color={theme.palette.text.secondary}
          />
          <P2
            color="textSecondary"
            style={{
              marginLeft: theme.spacing(0.5),
              marginRight: theme.spacing(2.5),
            }}
          >
            {articleCount} {articleCount === 1 ? "article" : "articles"}
          </P2>
        </>
        <Link
          linkIsButton
          color="primary"
          to={`/subjects/${ConvertStringToUrl(
            subject
          )}/topics/${ConvertStringToUrl(topic)}`}
          style={{ marginLeft: "auto" }}
        >
          View topic
        </Link>
      </CardActions>
    </Card>
  )
}

TopicCard.propTypes = {
  topic: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  articleCount: PropTypes.number.isRequired,
}

export default TopicList

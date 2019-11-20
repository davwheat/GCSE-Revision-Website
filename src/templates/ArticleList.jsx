import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import { H4, Subtitle2, P, P2 } from "../components/EasyText"
import {
  Card,
  Grid,
  CardContent,
  CardActions,
  useTheme,
  CardActionArea,
} from "@material-ui/core"
import Link from "../components/Link"

import TimerIcon from "mdi-react/TimerIcon"

const ArticleList = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: ASC }
          ) {
            edges {
              node {
                timeToRead
                excerpt(pruneLength: 150, truncate: true)
                fields {
                  slug
                }
                frontmatter {
                  title
                  date(formatString: "dddd, DD MMMM YYYY")
                  description
                  topic
                  subject
                }
                wordCount {
                  words
                }
              }
            }
          }
        }
      `}
      render={data => {
        const posts = data.allMarkdownRemark.edges

        return (
          <Grid container spacing={3}>
            {posts.map((post, i) => {
              // If it's not the subject we want, ignore it
              if (post.node.frontmatter.subject !== props.subject) return null

              // If it's not the topic we want (and we have told the component a topic) ignore it
              if (props.topic && post.node.frontmatter.topic !== props.topic)
                return null

              return (
                <Grid key={i} item xs={12} sm={6}>
                  <PostCard post={post} />
                </Grid>
              )
            })}
          </Grid>
        )
      }}
    />
  )
}

ArticleList.propTypes = {
  subject: PropTypes.string.isRequired,
  topic: PropTypes.string,
  subjectGroup: PropTypes.string,
}

const PostCard = props => {
  const { excerpt, timeToRead } = props.post.node
  const { date, description, /*subject,*/ title } = props.post.node.frontmatter
  const { slug } = props.post.node.fields
  const wordCount = props.post.node.wordCount.words

  const theme = useTheme()

  return (
    <Card>
      <CardActionArea
        component={Link}
        className="no-underline color-inherit"
        to={slug.substr(1)}
      >
        <CardContent>
          <H4
            component="h2"
            color="primary"
            className="keepColor"
            style={{ marginBottom: theme.spacing(0.75) }}
          >
            {title}
          </H4>
          <Subtitle2 color="textSecondary" gutterBottom>
            Published on {date}
          </Subtitle2>

          <P gutterBottom>{description ? description : excerpt}</P>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <>
          <TimerIcon
            aria-label="estimated time to read"
            color={theme.palette.text.secondary}
          />
          <P2
            color="textSecondary"
            style={{
              marginLeft: theme.spacing(0.5),
              marginRight: theme.spacing(2.5),
            }}
          >
            {Math.round(1.35 * timeToRead)}{" "}
            {Math.round(1.35 * timeToRead) === 1 ? "mins" : "min"}
          </P2>
          <P2 color="textSecondary" style={{ marginLeft: theme.spacing(0.5) }}>
            {wordCount} words
          </P2>
        </>
        <Link
          linkIsButton
          color="primary"
          to={slug.substr(1)}
          style={{ marginLeft: "auto" }}
        >
          Read article
        </Link>
      </CardActions>
    </Card>
  )
}

PostCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.object.isRequired,
}

export default ArticleList

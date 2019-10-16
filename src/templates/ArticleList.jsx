import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import { H1, H4, Subtitle2, P, P2 } from "../components/EasyText"
import {
  Card,
  Grid,
  CardContent,
  CardActions,
  useTheme,
} from "@material-ui/core"
import Link from "../components/Link"
import Breadcrumbs from "../components/Breadcrumbs"

import TimerIcon from "mdi-react/TimerIcon"

function GenerateLabel(subject) {
  return subject
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ")
}

const ArticleList = props => {
  const subjectLabel = GenerateLabel(props.subject)

  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
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

        let groupBreadcrumbs = []

        props.subjectGroup &&
          (groupBreadcrumbs = [
            {
              label: GenerateLabel(props.subjectGroup),
              href: `/subjects/${props.subjectGroup}`,
            },
          ])

        return (
          <>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                ...groupBreadcrumbs,
                { label: subjectLabel, href: props.backUrl },
                { label: "Articles" },
              ]}
            />
            <H1 gutterBottom>All {subjectLabel} articles</H1>
            <br />
            <Grid container spacing={3}>
              {posts.map((post, i) => {
                if (post.node.frontmatter.subject !== props.subject) return null

                return (
                  <Grid key={i} item xs={12} sm={6}>
                    <PostCard post={post} />
                  </Grid>
                )
              })}
            </Grid>
          </>
        )
      }}
    />
  )
}

ArticleList.propTypes = {
  subject: PropTypes.string.isRequired,
  backUrl: PropTypes.string.isRequired,
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
      <CardContent>
        <Link className="no-underline" to={slug}>
          <H4
            component="h2"
            color="primary"
            style={{ marginBottom: theme.spacing(0.75) }}
          >
            {title}
          </H4>
        </Link>
        <Subtitle2 color="textSecondary" gutterBottom>
          {date}
        </Subtitle2>

        <P gutterBottom>{description ? description : excerpt}</P>
      </CardContent>
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
            {timeToRead} {timeToRead === 1 ? "min" : "mins"}
          </P2>
          <P2 color="textSecondary" style={{ marginLeft: theme.spacing(0.5) }}>
            {wordCount} words
          </P2>
        </>
        <Link button color="primary" to={slug} style={{ marginLeft: "auto" }}>
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

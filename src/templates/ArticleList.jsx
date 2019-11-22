import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import { H4, Subtitle2, P, P2 } from "../components/EasyText"

import {
  Card,
  CardContent,
  CardActions,
  useTheme,
  CardActionArea,
  Box,
  makeStyles,
  Zoom,
} from "@material-ui/core"
import TimerIcon from "mdi-react/TimerIcon"
import TripleIcon from "mdi-react/Numeric3CircleOutlineIcon"
import HigherIcon from "mdi-react/ArrowUpCircleOutlineIcon"

import Link from "../components/Link"

import Masonry from "react-masonry-component"

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(1),
    maxWidth: 400,
    "@media (max-width: 768px)": {
      width: `calc(100% - ${theme.spacing(2)}px)`,
      maxWidth: "unset",
    },
  },
  container: {
    margin: "0 auto",
    maxWidth: "100%",
  },
}))

const ArticleList = props => {
  const classes = useStyles()

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
                  tripleOnly
                  higherOnly
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

        // return (
        //   <Grid container spacing={3}>
        //     {posts.map((post, i) => {
        //       // If it's not the subject we want, ignore it
        //       if (post.node.frontmatter.subject !== props.subject) return null

        //       // If it's not the topic we want (and we have told the component a topic) ignore it
        //       if (props.topic && post.node.frontmatter.topic !== props.topic)
        //         return null

        //       return (
        //         <Grid key={i} item xs={12} sm={6}>
        //           <PostCard post={post} />
        //         </Grid>
        //       )
        //     })}
        //   </Grid>
        // )
        return (
          <Masonry
            options={{
              fitWidth: true,
              horizontalOrder: true,
            }}
            className={classes.container}
          >
            {posts.map((post, i) => {
              // If it's not the subject we want, ignore it
              if (post.node.frontmatter.subject !== props.subject) return null

              // If it's not the topic we want (and we have told the component a topic) ignore it
              if (props.topic && post.node.frontmatter.topic !== props.topic)
                return null

              return (
                <Box key={i} className={classes.card}>
                  <Zoom in style={{ transitionDelay: i * 50 + "ms" }}>
                    <div>
                      <PostCard post={post} />
                    </div>
                  </Zoom>
                </Box>
              )
            })}
          </Masonry>
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
  const {
    date,
    description,
    title,
    tripleOnly: isTripleScience,
    higherOnly: isHigher,
  } = props.post.node.frontmatter
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

          {isTripleScience && isHigher ? (
            <P paragraph align="center">
              [<TripleIcon />
              <HigherIcon /> <strong>Triple Science Higher only</strong>]
            </P>
          ) : null}
          {isTripleScience && !isHigher ? (
            <P paragraph align="center">
              [<TripleIcon />
              <strong>Triple Science only</strong>]
            </P>
          ) : null}
          {!isTripleScience && isHigher ? (
            <P paragraph align="center">
              [<HigherIcon />
              <strong>Higher only</strong>]
            </P>
          ) : null}

          <P>{description ? description : excerpt}</P>
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

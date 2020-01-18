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

import { XMasonry, XBlock } from "react-xmasonry"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  card: {
    "& > div > div": {
      margin: theme.spacing(1),
      // minWidth: 325,
    },
    margin: `auto`,
    // maxWidth: 400,
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
                  subtopic
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

        let counter = -1

        return (
          <XMasonry
            targetBlockWidth={375}
            maxColumns={2}
            className={classes.container}
          >
            {posts.map((post, i) => {
              // If it's not the subject we want, ignore it
              if (post.node.frontmatter.subject !== props.subject) return []

              // If it's not the topic we want (and we have told the component a topic) ignore it
              if (props.topic && post.node.frontmatter.topic !== props.topic)
                return []

              // If it's not the subtopic we want (and we have told the component a subtopic) ignore it
              if (
                props.subtopic &&
                post.node.frontmatter.subtopic !== props.subtopic
              )
                return []

              counter++

              return (
                <XBlock key={i}>
                  <Box className={classes.card}>
                    <Zoom in style={{ transitionDelay: counter * 75 + "ms" }}>
                      <div>
                        <PostCard post={post} />
                      </div>
                    </Zoom>
                  </Box>
                </XBlock>
              )
            })}
          </XMasonry>
        )
      }}
    />
  )
}

ArticleList.propTypes = {
  subject: PropTypes.string.isRequired,
  topic: PropTypes.string,
  subjectGroup: PropTypes.string,
  subtopic: PropTypes.string,
}

const useStylesCard = makeStyles(() => ({
  cardActions: {
    whiteSpace: "nowrap",
    "@media (max-width: 768px)": {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  actionSeparator: {
    "@media (max-width: 768px)": {
      flexBasis: "100%",
      width: 0,
      display: "block",
    },
    display: "none",
  },
  readButton: {
    "@media not all and (max-width: 768px)": {
      marginLeft: "auto",
    },
  },
}))

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
  const classes = useStylesCard()

  const wordsToTime = words => {
    const wpm = 95

    const mins = Math.floor(words / wpm)
    const minuteFraction = Math.round((words / wpm - mins) * 2) / 2

    const additive = minuteFraction === 0.5 ? "½" : ""

    const finalMins = minuteFraction === 1 ? mins + 1 : mins

    const out = `${finalMins}${additive}`

    return out
  }

  return (
    <Card>
      <CardActionArea
        component={Link}
        className={clsx("no-underline", "color-inherit")}
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
          <Subtitle2 component="p" color="textSecondary" gutterBottom>
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
      <CardActions disableSpacing className={classes.cardActions}>
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
            {wordsToTime(wordCount)} mins
          </P2>
          <P2 color="textSecondary" style={{ marginLeft: theme.spacing(0.5) }}>
            {wordCount} words
          </P2>
        </>
        <div className={classes.actionSeparator} />
        <Link
          linkIsButton
          color="primary"
          to={slug.substr(1)}
          className={classes.readButton}
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

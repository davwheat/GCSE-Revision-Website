import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

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
  Tooltip,
  TextField,
  InputAdornment,
} from "@material-ui/core"

import ErrorIcon from "mdi-react/ErrorOutlineIcon"
import SearchIcon from "mdi-react/SearchIcon"
import TimerIcon from "mdi-react/TimerOutlineIcon"
import TripleIcon from "mdi-react/Numeric3CircleOutlineIcon"
import HigherIcon from "mdi-react/ArrowUpCircleOutlineIcon"

import Link from "../components/Link"

import { XMasonry, XBlock } from "react-xmasonry"
import clsx from "clsx"

import Fuse from "fuse.js"
import { BlockAdvert } from "../components/Ads"

const useStyles = makeStyles(() => ({
  container: {
    margin: "0 auto",
    maxWidth: "100%",
  },
}))

const ArticleList = props => {
  const classes = useStyles()

  const [FuseSearch, setFuseSearch] = useState(null)
  const [SearchQuery, setSearchQuery] = useState(null)
  const [Timeout, setTimeoutId] = useState(null)

  const [AllPosts, setAllPosts] = useState(null)

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
        edges {
          node {
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
              tripleOnly
              higherOnly
            }
            wordCount {
              words
            }
            internal {
              content
            }
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
          internal {
            content
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.nodes

  let counter = -1

  let tempPosts = []

  const fuseJsOptions = {
    id: "id",
    shouldSort: true,
    tokenize: true,
    threshold: 0.95,
    location: 0,
    distance: 150,
    maxPatternLength: 50,
    minMatchCharLength: 2,
    keys: [
      { name: "title", weight: 0.45 },
      { name: "description", weight: 0.35 },
      { name: "content", weight: 0.2 },
    ],
  }

  AllPosts &&
    SearchQuery &&
    !FuseSearch &&
    setFuseSearch(new Fuse(AllPosts, fuseJsOptions))

  const results =
    SearchQuery && AllPosts && FuseSearch
      ? FuseSearch.search(SearchQuery)
      : null

  const renderPosts = (post, i) => {
    if (!results) {
      // If it's not the subject we want, ignore it
      if (post.frontmatter.subject !== props.subject) return []

      // If it's not the topic we want (and we have told the component a topic) ignore it
      if (props.topic && post.frontmatter.topic !== props.topic) return []

      // If it's not the subtopic we want (and we have told the component a subtopic) ignore it
      if (props.subtopic && post.frontmatter.subtopic !== props.subtopic)
        return []

      counter++

      if (!AllPosts) {
        tempPosts.push({
          id: i,
          title: post.node.frontmatter.title,
          description: post.node.frontmatter.description,
          content: post.node.internal.content,
        })
      }

      return (
        <XBlock key={i}>
          <PostCard counter={counter} post={post} />
        </XBlock>
      )
    } else {
      const postInfo = posts[post]

      return (
        <XBlock key={i}>
          <PostCard counter={counter} post={postInfo} />
        </XBlock>
      )
    }
  }

  const out = (
    <>
      <TextField
        placeholder="Search articles"
        variant="outlined"
        fullWidth
        error={results && results.length === 0}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onInput={e => {
          Timeout && clearTimeout(window.__article_search_timeout)

          let targetVal = e.target.value

          window.__article_search_timeout = setTimeout(() => {
            setSearchQuery(targetVal)
          }, 250) // don't search while typing
        }}
        style={{ marginBottom: 16 }}
      />

      {results ? (
        results.length > 0 ? (
          <XMasonry
            targetBlockWidth={375}
            maxColumns={2}
            className={classes.container}
          >
            {results.map(renderPosts)}
          </XMasonry>
        ) : (
          <>
            <P align="center" color="error">
              <ErrorIcon /> 0 results found for query &quot;{SearchQuery}&quot;
            </P>
          </>
        )
      ) : (
        <XMasonry
          targetBlockWidth={375}
          maxColumns={2}
          className={classes.container}
        >
          {posts.map(renderPosts)}
        </XMasonry>
      )}

      <BlockAdvert />
    </>
  )

  if (!AllPosts) setAllPosts(tempPosts)

  return out
}

ArticleList.propTypes = {
  subject: PropTypes.string.isRequired,
  topic: PropTypes.string,
  subjectGroup: PropTypes.string,
  subtopic: PropTypes.string,
}

const useStylesCard = makeStyles(theme => ({
  card: {
    "& > div > div": {
      margin: theme.spacing(1),
      // minWidth: 325,
    },
    margin: `auto`,
    // maxWidth: 400,
  },
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
  const {
    date,
    description,
    title,
    tripleOnly: isTripleScience,
    higherOnly: isHigher,
  } = props.post.frontmatter
  const { slug } = props.post.fields
  const wordCount = props.post.wordCount.words

  const { counter } = props

  const theme = useTheme()
  const classes = useStylesCard()

  const wordsToTime = words => {
    const wpm = 95

    const mins = Math.floor(words / wpm)
    const minuteFraction = Math.round((words / wpm - mins) * 2) / 2

    const additive = minuteFraction === 0.5 ? "½" : ""

    const finalMins = minuteFraction === 1 ? mins + 1 : mins

    if (0 < finalMins && finalMins < 1) {
      return `${finalMins} min`
    } else if (finalMins === 1) {
      return `${finalMins} min`
    } else if (finalMins === 0) {
      return `${additive} min`
    } else {
      return `${finalMins}${additive} mins`
    }
  }

  return (
    <>
      <Box className={classes.card}>
        <Zoom in style={{ transitionDelay: counter * 75 + "ms" }}>
          <div>
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
                      <HigherIcon /> <strong>Triple Science Higher only</strong>
                      ]
                    </P>
                  ) : null}
                  {isTripleScience && !isHigher ? (
                    <P paragraph align="center">
                      [<TripleIcon /> <strong>Triple Science only</strong>]
                    </P>
                  ) : null}
                  {!isTripleScience && isHigher ? (
                    <P paragraph align="center">
                      [<HigherIcon /> <strong>Higher only</strong>]
                    </P>
                  ) : null}

                  <P>{description ? description : ""}</P>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing className={classes.cardActions}>
                <>
                  <Tooltip title="Estimated time to read" placement="top">
                    <span>
                      <TimerIcon color={theme.palette.text.secondary} />
                    </span>
                  </Tooltip>
                  <P2
                    color="textSecondary"
                    style={{
                      marginLeft: theme.spacing(0.5),
                      marginRight: theme.spacing(2.5),
                    }}
                  >
                    {wordsToTime(wordCount)}
                  </P2>
                  <P2
                    color="textSecondary"
                    style={{ marginLeft: theme.spacing(0.5) }}
                  >
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
          </div>
        </Zoom>
      </Box>
    </>
  )
}

PostCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
}

export default ArticleList

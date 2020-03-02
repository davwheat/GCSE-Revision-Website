/* eslint-disable indent */
import React from "react"
import PropTypes from "prop-types"

import { H4, P2 } from "../../../components/EasyText"
import {
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  Box,
  makeStyles,
  Zoom,
  useTheme,
} from "@material-ui/core"
import ArticlesIcon from "mdi-react/NewspaperVariantMultipleOutlineIcon"

import Link from "../../../components/Link"

import {
  ConvertStringToUrl,
  ConvertStringToTopicUrl,
  ConvertTagToString,
} from "../../../functions/stringManipulations"

import { XMasonry, XBlock } from "react-xmasonry"

import { TopicDescriptions } from "../../../constants/subjectInfo"
import { BlockAdvert } from "../../../components/Ads"
import TopicListQuery from "../../Queries/English Literature/topiclist-query"

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(1.5),
    maxWidth: 400,
    "@media (max-width: 768px)": {
      width: `calc(100% - ${theme.spacing(3)}px)`,
      maxWidth: "unset",
    },
  },
  container: {
    margin: "0 auto",
    maxWidth: "100%",
  },
}))

const TopicList = props => {
  const subjectLabel = props.subject
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ")

  const classes = useStyles()

  function renderCallback(data) {
    return (
      <>
        <XMasonry
          targetBlockWidth={375}
          maxColumns={2}
          className={classes.container}
        >
          {data.map((topic, i) => {
            return (
              <XBlock key={i}>
                <Box className={classes.card}>
                  <Zoom
                    in
                    style={{
                      transitionDelay: i * 75 + "ms",
                    }}
                  >
                    <div>
                      <TopicCard
                        topic={topic.name}
                        articleCount={topic.articleCount}
                        subject={subjectLabel}
                        subjectGroup={
                          props.subjectGroup ? props.subjectGroup : undefined
                        }
                      />
                    </div>
                  </Zoom>
                </Box>
              </XBlock>
            )
          })}
        </XMasonry>
        <BlockAdvert />
      </>
    )
  }

  return <TopicListQuery callback={renderCallback} />
}

TopicList.propTypes = {
  subject: PropTypes.string.isRequired,
  subjectGroup: PropTypes.string,
}

const TopicCard = props => {
  const { topic, subject, subjectGroup, articleCount } = props

  const theme = useTheme()

  const getUrl = (topic, subject, subjectGroup = null) =>
    `subjects/${
      subjectGroup ? ConvertStringToUrl(subjectGroup) + "/" : ""
    }${ConvertStringToUrl(subject)}/topics/${ConvertStringToTopicUrl(
      ConvertStringToUrl(topic)
    )}`

  return (
    <Card>
      <CardActionArea
        component={Link}
        className="no-underline color-inherit"
        to={getUrl(topic, subject, subjectGroup)}
      >
        <CardContent>
          <H4 component="h2" color="primary" className="keepColor" gutterBottom>
            {ConvertTagToString(topic)}
          </H4>
          <P2>
            {subjectGroup
              ? TopicDescriptions[ConvertTagToString(subjectGroup)][
                  ConvertTagToString(subject)
                ][ConvertTagToString(topic)] || ""
              : TopicDescriptions[ConvertTagToString(subject)][
                  ConvertTagToString(topic)
                ] || ""}
          </P2>
        </CardContent>
      </CardActionArea>
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
          to={getUrl(topic, subject, subjectGroup)}
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
  subjectGroup: PropTypes.string,
  articleCount: PropTypes.number.isRequired,
}

export default TopicList

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
import SubtopicListQuery from "../../Queries/English Literature/subtopiclist-query"

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

const SubTopicList = props => {
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
          {data.map((subtopic, i) => {
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
                      <SubTopicCard
                        subtopic={subtopic.name}
                        topic={props.topic}
                        articleCount={subtopic.articleCount}
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

  return <SubtopicListQuery topic={props.topic} callback={renderCallback} />
}

SubTopicList.propTypes = {
  subject: PropTypes.string.isRequired,
  subjectGroup: PropTypes.string,
  topic: PropTypes.string.isRequired,
}

const SubTopicCard = props => {
  const { topic, subtopic, subject, subjectGroup, articleCount } = props

  const theme = useTheme()

  const getUrl = (subtopic, topic, subject, subjectGroup = null) =>
    `subjects/${
      subjectGroup ? ConvertStringToUrl(subjectGroup) + "/" : ""
    }${ConvertStringToUrl(subject)}/topics/${ConvertStringToTopicUrl(
      ConvertStringToUrl(topic)
    )}/${ConvertStringToTopicUrl(ConvertStringToUrl(subtopic))}`

  return (
    <Card>
      <CardActionArea
        component={Link}
        className="no-underline color-inherit"
        to={getUrl(subtopic, topic, subject, subjectGroup)}
      >
        <CardContent>
          <H4 component="h2" color="primary" className="keepColor" gutterBottom>
            {ConvertTagToString(subtopic)}
          </H4>
          <P2>
            {subjectGroup
              ? TopicDescriptions[ConvertTagToString(subjectGroup)][
                  ConvertTagToString(subject)
                ][ConvertTagToString(topic)][ConvertTagToString(subtopic)] || ""
              : TopicDescriptions[ConvertTagToString(subject)][
                  ConvertTagToString(topic)
                ][ConvertTagToString(subtopic)] || ""}
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
          to={getUrl(subtopic, topic, subject, subjectGroup)}
          style={{ marginLeft: "auto" }}
        >
          View section
        </Link>
      </CardActions>
    </Card>
  )
}

SubTopicCard.propTypes = {
  subtopic: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  subjectGroup: PropTypes.string,
  articleCount: PropTypes.number.isRequired,
}

export default SubTopicList

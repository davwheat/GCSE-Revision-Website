/* eslint-disable indent */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { useTheme, Divider, makeStyles, Tooltip } from "@material-ui/core"

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon,
} from "react-share"

import Layout from "../components/layout"
import Markdown from "../components/Markdown"
import { H1, Subtitle1, P } from "../components/EasyText"
import Breadcrumbs from "../components/Breadcrumbs"
import SEO from "../components/seo"

import ArticleTOC from "./ArticleTOC"

import {
  ConvertStringToLabel,
  ConvertStringToUrl,
  ConvertStringToTopicUrl,
} from "../functions/stringManipulations"
import PeriodicTable from "../components/PeriodicTable"
import Link from "../components/Link"
import firebase from "gatsby-plugin-firebase"

String.prototype.trimRight = function(charList) {
  if (charList === undefined) charList = "s"

  return this.replace(new RegExp("[" + charList + "]+$"), "")
}

const useShareBtnStyles = makeStyles(theme => ({
  shareButton: {
    verticalAlign: "top",
    display: "inline-block",
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    marginRight: theme.spacing(),
    textAlign: "center",
    transition: theme.transitions.create(["opacity", "box-shadow"], {
      duration: 100,
    }),
    borderRadius: "50%",
    cursor: "pointer",
    "&:hover:not(:active)": {
      opacity: 0.8,
      boxShadow: theme.shadows[12],
    },
  },
}))

const Article = props => {
  useEffect(() => {
    firebase.analytics().logEvent("article_rendered")
  })

  const classes = useShareBtnStyles()
  const theme = useTheme()

  const post = props.data.markdownRemark
  const slug = post.fields.slug

  // used instead of 'href' to remove hash
  const CurrentUrl = props.location.origin + props.location.pathname

  let url = slug.trimRight("/").split("/")
  url.pop()

  const subjectUrl = ConvertStringToUrl(post.frontmatter.subject)
  const subjectLabel = ConvertStringToLabel(post.frontmatter.subject)

  const subjectGroupUrl = post.frontmatter.subjectGroup
    ? ConvertStringToUrl(post.frontmatter.subjectGroup)
    : null
  const subjectGroupLabel = subjectGroupUrl
    ? ConvertStringToLabel(post.frontmatter.subjectGroup)
    : null

  const groupBreadcrumb = subjectGroupUrl
    ? [
        {
          label: subjectGroupLabel,
          href: `subjects/${subjectGroupUrl}`,
        },
      ]
    : []

  const subtopicBreadcrumb = post.frontmatter.subtopic
    ? [
        {
          label: ConvertStringToLabel(post.frontmatter.subtopic),
          href: `subjects/${
            subjectGroupUrl ? subjectGroupUrl + "/" : ""
          }${subjectUrl}/topics/${ConvertStringToTopicUrl(
            ConvertStringToUrl(post.frontmatter.topic)
          )}/${ConvertStringToTopicUrl(
            ConvertStringToUrl(post.frontmatter.subtopic)
          )}`,
        },
      ]
    : []

  if (subjectLabel === "Chemistry") {
    if (
      !post.headings
        .reduce(
          (accumulator, currentValue) => [...accumulator, currentValue.value],
          []
        )
        .includes("Interactive Periodic Table")
    )
      post.headings.push({
        value: "Interactive Periodic Table",
        depth: 1,
        constant: true,
      })
  }

  return (
    <Layout type="article">
      <SEO
        title={post.frontmatter.title}
        description={
          post.frontmatter.description
            ? post.frontmatter.description
            : post.excerpt
        }
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "" },
          ...groupBreadcrumb,
          {
            label: subjectLabel,
            href: `subjects/${
              subjectGroupUrl ? subjectGroupUrl + "/" : ""
            }${subjectUrl}`,
          },
          {
            label: "Topics",
            href: `subjects/${
              subjectGroupUrl ? subjectGroupUrl + "/" : ""
            }${subjectUrl}/topics`,
          },
          {
            label: ConvertStringToLabel(post.frontmatter.topic),
            href: `subjects/${
              subjectGroupUrl ? subjectGroupUrl + "/" : ""
            }${subjectUrl}/topics/${ConvertStringToTopicUrl(
              ConvertStringToUrl(post.frontmatter.topic)
            )}`,
          },
          ...subtopicBreadcrumb,
          { label: post.frontmatter.title },
        ]}
      />
      <article id="article-container">
        <H1 gutterBottom>{post.frontmatter.title}</H1>
        <Subtitle1
          component="p"
          align="right"
          style={{ marginBottom: theme.spacing(4) }}
        >
          Published {post.frontmatter.date}
        </Subtitle1>

        <Divider />

        <section
          style={{
            display: "table",
            margin: "auto",
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <P
            style={{
              display: "table-cell",
              verticalAlign: "middle",
              paddingRight: 8,
            }}
          >
            Share this article:
          </P>

          <Tooltip title="Share on Facebook">
            <div className={classes.shareButton}>
              <FacebookShareButton
                url={CurrentUrl}
                quote={`Read ${post.frontmatter.title} from GCSE Revise It`}
                hashtag={`gcses`}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
          </Tooltip>

          <Tooltip title="Share on Twitter">
            <div className={classes.shareButton}>
              <TwitterShareButton
                url={CurrentUrl}
                title={`Read ${post.frontmatter.title} from GCSE Revise It`}
                hashtags={[`gcses`, `revision`, `gcserevision`]}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
          </Tooltip>

          <Tooltip title="Share via WhatsApp">
            <div className={classes.shareButton}>
              <WhatsappShareButton
                url={CurrentUrl}
                title={`Read ${post.frontmatter.title} from GCSE Revise It`}
                separator={` >> `}
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
          </Tooltip>

          <Tooltip title="Share on Reddit">
            <div className={classes.shareButton}>
              <RedditShareButton
                url={CurrentUrl}
                title={`Read ${post.frontmatter.title} from GCSE Revise It`}
              >
                <RedditIcon size={32} round />
              </RedditShareButton>
            </div>
          </Tooltip>

          <Tooltip title="Share via Email">
            <div className={classes.shareButton}>
              <EmailShareButton
                url={CurrentUrl}
                subject={`Check out GCSE Revise It`}
                title={`Try reading ${post.frontmatter.title} from GCSE Revise It!`}
                separator={` >> `}
                openWindow
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
          </Tooltip>
        </section>

        <Divider style={{ marginBottom: 16 }} />

        <ArticleTOC headings={post.headings} />
        <Markdown src={post.rawMarkdownBody} />
      </article>
      {subjectLabel === "Chemistry" ? (
        <>
          <Divider
            variant="middle"
            style={{
              marginTop: theme.spacing(4),
              marginBottom: theme.spacing(4),
            }}
          />

          <H1 gutterBottom id="interactive-periodic-table">
            Interactive Periodic Table
          </H1>

          <PeriodicTable />
          <P paragraph style={{ marginTop: theme.spacing(2) }}>
            If this periodic table doesn&apos;t seem to work properly for you,
            you can download a PDF copy of the official AQA periodic table from{" "}
            <Link to="/files/periodic-table-insert.pdf">this link</Link>.
          </P>
        </>
      ) : null}
    </Layout>
  )
}

Article.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object,
}

export default Article

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMM 'YY")
        description
        subject
        subjectGroup
        topic
        subtopic
      }
      fields {
        slug
      }
      rawMarkdownBody
      excerpt
      headings {
        value
        depth
      }
    }
  }
`

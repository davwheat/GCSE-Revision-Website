import React, { useState } from "react"
import PropTypes from "prop-types"

import {
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
} from "@material-ui/core"

import Link from "../components/Link"
import { H2, P2 } from "../components/EasyText"

import textToSafeId from "../functions/textToSafeId"

const nestMultiplier = 4

const ArticleTOC = ({ headings }) => {
  const theme = useTheme()

  return (
    <>
      <H2 gutterBottom>Contents</H2>
      <P2>Tap on a heading to scroll automatically.</P2>
      <List dense>
        {headings.map((heading, i) => {
          // Ensure all heading IDs are unique
          let id = textToSafeId(heading.value) + `-${i + 1}`

          return (
            <ListItem
              button
              component={Link}
              to={`#${id}`}
              key={heading.value}
              style={{
                paddingLeft: theme.spacing(heading.depth * nestMultiplier),
                color: theme.palette.primary.main,
              }}
            >
              <ListItemText primary={heading.value} />
            </ListItem>
          )
        })}
      </List>
      <Divider
        variant="fullWidth"
        style={{ marginTop: 16, marginBottom: 32 }}
      />
    </>
  )
}

ArticleTOC.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      depth: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}

export default ArticleTOC

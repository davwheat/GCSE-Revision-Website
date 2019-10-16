import React from "react"
import PropTypes from "prop-types"

import {
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
} from "@material-ui/core"

import Link from "../components/Link"
import { H2 } from "../components/EasyText"

import textToSafeId from "../functions/textToSafeId"

const nestMultiplier = 4

const ArticleTOC = ({ headings }) => {
  const theme = useTheme()

  return (
    <>
      <H2>Contents</H2>
      <List>
        {headings.map(heading => (
          <ListItem
            button
            component={Link}
            to={`#${textToSafeId(heading.value)}`}
            key={heading.value}
            style={{
              paddingLeft: theme.spacing(
                heading.depth * nestMultiplier
              ),
              color: theme.palette.primary.main,
            }}
          >
            <ListItemText primary={heading.value} />
          </ListItem>
        ))}
      </List>
      <Divider variant="fullWidth" style={{ marginTop: 8, marginBottom: 20 }} />
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

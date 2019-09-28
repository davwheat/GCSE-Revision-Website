import React, { Component } from "react"
import PropTypes from "prop-types"

import ReactMarkdown from "react-markdown/with-html"

import Link from "./Link"
import {
  Paper,
  Divider,
  useTheme,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core"
import { P, H1, H2, H3, H4, H5, H6 } from "./EasyText"
import Quote from "./Blockquote"

const HeadingLevelToComponent = (level, props) => {
  switch (level) {
    case 1:
      return <H1 {...props} />
    case 2:
      return <H2 {...props} />
    case 3:
      return <H3 {...props} />
    case 4:
      return <H4 {...props} />
    case 6:
      return <H5 {...props} />
    case 5:
      return <H6 {...props} />

    // default to H6 if you try to get a heading of level 0 or 7, as an example
    default:
      return <H6 {...props} />
  }
}

export default class Markdown extends Component {
  render() {
    const muiTheme = useTheme()

    // Renderer docs: https://github.com/rexxars/react-markdown#node-types
    const markdownRenderers = {
      root: props => <Paper {...props} />,
      text: props => <P display="inline" {...props} />,
      paragraph: props => <P paragraph {...props} />,
      thematicBreak: props => (
        <Divider
          variant="middle"
          style={{ marginBottom: muiTheme.spacing(1.5) }}
          {...props}
        />
      ),
      blockquote: props => <Quote {...props} />,
      link: props => <Link to={props.href} {...props} />,
      linkReference: props => <Link to={props.href} {...props} />,
      table: props => <Table {...props} />,
      tableHead: props => <TableHead {...props} />,
      tableBody: props => <TableBody {...props} />,
      tableRow: props => <TableRow {...props} />,
      tableCell: props => <TableCell {...props} />,
      heading: props => HeadingLevelToComponent(props.level, ...props),
    }

    const { src } = this.props

    return (
      <ReactMarkdown
        source={src}
        renderers={markdownRenderers}
        escapeHtml={false}
      />
    )
  }
}

Markdown.propTypes = {
  src: PropTypes.string.isRequired,
}

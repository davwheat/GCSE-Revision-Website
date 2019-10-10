import React from "react"

import EnglishIcon from "mdi-react/BookOutlineIcon"
import MathsIcon from "mdi-react/CalculatorIcon"
import ComputingIcon from "mdi-react/ChipIcon"

const Descriptions = {
  English: `We offer many helpful English revision
  tools, such as: mini language mocks, essay planning
  tips, quote memorising tools, and literature knowledge
  organisers. We're always looking to add more to the
  site!`,
  Maths: `Our site provides useful tips and tricks to
  help you make the most of your calculator as well as maths
  quizzes and articles on harder topics.`,
  "Computer Science": `Computer Science is made easier with our site.
  With useful suggestions for converting between hex, decimal
  and binary as well as an interactive bitmap editor, there's
  nothing else you'll need to revise (...except your brain and an
    internet-enabled device).`,
}

const AllDetails = [
  {
    name: "English",
    description: Descriptions["English"],
    url: "/subjects/english",
    unreleased: false,
    icon: <EnglishIcon />,
  },
  {
    name: "Maths",
    description: Descriptions["Maths"],
    url: "/subjects/maths",
    unreleased: false,
    icon: <MathsIcon />,
  },
  {
    name: "Computer Science",
    description: Descriptions["Computer Science"],
    url: "/subjects/computer-science",
    unreleased: false,
    icon: <ComputingIcon />,
  },
]

export default AllDetails
export { Descriptions }

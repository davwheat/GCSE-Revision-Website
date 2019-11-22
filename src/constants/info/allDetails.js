import React from "react"

import Descriptions from "./subjectDescriptions"

import EnglishIcon from "mdi-react/BookOutlineIcon"
import MathsIcon from "mdi-react/CalculatorIcon"
import ComputingIcon from "mdi-react/ChipIcon"
import ScienceIcon from "mdi-react/TestTubeIcon"
import BiologyIcon from "mdi-react/BacteriaOutlineIcon"
import ChemistryIcon from "mdi-react/FlaskOutlineIcon"
import PhysicsIcon from "mdi-react/AtomVariantIcon"

export default [
  {
    name: "English",
    description: Descriptions["English"],
    url: "subjects/english",
    unreleased: false,
    icon: <EnglishIcon />,
  },
  {
    name: "Maths",
    description: Descriptions["Maths"],
    url: "subjects/maths",
    unreleased: false,
    icon: <MathsIcon />,
  },
  {
    name: "Computer Science",
    description: Descriptions["Computer Science"],
    url: "subjects/computer-science",
    unreleased: false,
    icon: <ComputingIcon />,
  },
  {
    name: "Science",
    description: Descriptions["Science"],
    url: "subjects/science",
    unreleased: false,
    icon: <ScienceIcon />,
    subitems: [
      {
        name: "Biology",
        description: Descriptions["Biology"],
        url: "subjects/science/biology",
        unreleased: false,
        icon: <BiologyIcon />,
      },
      {
        name: "Chemistry",
        description: Descriptions["Chemistry"],
        url: "subjects/science/chemistry",
        unreleased: false,
        icon: <ChemistryIcon />,
      },
      {
        name: "Physics",
        description: Descriptions["Physics"],
        url: "subjects/science/physics",
        unreleased: false,
        icon: <PhysicsIcon />,
      },
    ],
  },
]

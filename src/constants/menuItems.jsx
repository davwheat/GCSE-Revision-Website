import React from "react"

import HomeIcon from "mdi-react/HomeOutlineIcon"
import AboutIcon from "mdi-react/AboutOutlineIcon"

import SubjectInfo from "./subjectInfo"

let subjectItems = []

SubjectInfo.forEach(o => {
  if (o.unreleased !== true) {
    subjectItems.push({ text: o.name, icon: o.icon, href: o.url })
  }
})

export default [
  [{ text: "Home", icon: <HomeIcon />, href: "/" }],
  [...subjectItems],
  [{ text: "About Us", icon: <AboutIcon />, href: "/about-us" }],
]

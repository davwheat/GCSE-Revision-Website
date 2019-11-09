import React from "react"

import HomeIcon from "mdi-react/HomeOutlineIcon"
import AboutIcon from "mdi-react/AboutOutlineIcon"

import SubjectInfo from "./subjectInfo"

let subjectItems = []

SubjectInfo.forEach(o => {
  if (o.unreleased !== true) {
    subjectItems.push({
      text: o.name,
      icon: o.icon,
      href: o.url,
      subitems: o.subitems
        ? o.subitems.map(o => ({ text: o.name, href: o.url, ...o }))
        : undefined,
    })
  }
})

export default [
  [{ text: "Home", icon: <HomeIcon />, href: "/" }],
  [...subjectItems],
  [{ text: "About Us", icon: <AboutIcon />, href: "/about-us" }],
]

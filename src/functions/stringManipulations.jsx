export function ConvertStringToUrl(s) {
  if (typeof s !== "string") return ""
  return s
    .toLowerCase()
    .split(" ")
    .join("-")
}

export function ConvertStringToLabel(s) {
  if (typeof s !== "string") return ""
  return s
    .split(" ")
    .map(s => {
      if (
        [
          "and",
          "to",
          "of",
          "a",
          "an",
          "the",
          "for",
          "nor",
          "but",
          "or",
          "yet",
          "so",
          "on",
          "up",
        ].includes(s)
      )
        return s

      return s.charAt(0).toUpperCase() + s.substring(1)
    })
    .join(" ")
}

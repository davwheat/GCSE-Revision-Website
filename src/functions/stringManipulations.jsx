export function ConvertStringToUrl(s) {
  if (typeof s !== "string") return ""
  return s
    .toLowerCase()
    .replace(/([^a-z0-9\s]+)/gi, "")
    .split(" ")
    .join("-")
    .replace(/(-)\1+/g, "$1")
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

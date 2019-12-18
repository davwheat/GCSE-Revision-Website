export function ConvertStringToUrl(s) {
  if (typeof s !== "string") return ""
  return s
    .toLowerCase()
    .replace(/([^a-z0-9\s]+)/gi, "")
    .split(" ")
    .join("-")
    .replace(/(-)\1+/g, "$1")
}

export function ConvertStringToTopicUrl(s) {
  if (s.match(/(topic-)[0-9]+-.*/)) {
    //s = "topic-1-atomic-structure-..."
    let s1 = s.split("-") // ["topic", "1", "atomic", ...]

    return `${s1[0]}-${s1[1]}` // "topic-1"
  } else {
    return s
  }
}

export function ConvertTagToString(s) {
  if (typeof s !== "string") return ""

  return s
    .split("-")
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

export function IsYouTubeUrl(s) {
  return !!s.match(
    /^.*(youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/
  )
}

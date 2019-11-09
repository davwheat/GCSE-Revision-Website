export function ConvertStringToUrl(s) {
  if (typeof s !== "string") return ""
  return s.toLowerCase().replace(" ", "-")
}

export function ConvertStringToLabel(s) {
  if (typeof s !== "string") return ""
  return s
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ")
}

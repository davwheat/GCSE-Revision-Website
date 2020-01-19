export default value => {
  // e.g. "1. Hello Everyone!" => "1-hello-everyone"
  return value
    .toLowerCase()
    .replace(/[\s]/g, "-")
    .replace(/[^a-zA-Z0-9-_]/g, "")
}

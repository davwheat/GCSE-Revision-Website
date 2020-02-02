import React, { useEffect } from "react"

const ArticleAdvert = () => {
  useEffect(() => {
    (adsbygoogle = window.adsbygoogle || []).push({})
  })

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "block",
        textAlign: "center",
        margin: "12px auto 12px auto",
      }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-2701335557132384"
      data-ad-slot="9078149528"
    />
  )
}

const BlockAdvert = () => {
  useEffect(() => {
    (adsbygoogle = window.adsbygoogle || []).push({})
  })

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "block",
        margin: "16px auto 16px auto",
      }}
      data-ad-client="ca-pub-2701335557132384"
      data-ad-slot="6152603288"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

const FeedAdvert = () => {
  useEffect(() => {
    (adsbygoogle = window.adsbygoogle || []).push({})
  })

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "block",
        margin: "16px auto 16px auto",
      }}
      data-ad-format="fluid"
      data-ad-layout-key="-gr+5+w-6p+au"
      data-ad-client="ca-pub-2701335557132384"
      data-ad-slot="6699398199"
    />
  )
}

export { ArticleAdvert, BlockAdvert, FeedAdvert }

import React, { Component } from "react"

export default class Ad extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
    return (
      <div className="ad">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2701335557132384"
          data-ad-slot="xxxxxxxxxx"
          data-ad-format="auto"
        />
      </div>
    )
  }
}

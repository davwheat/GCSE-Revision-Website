/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: `Free GCSE Revision`,
    description: `A free revision tool for GCSE students.`,
    author: `@davwheat`,
    siteUrl: "https://gcse-revision-site.firebaseapp.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: "ca-pub-2701335557132384",
        head: true, // Optional
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-20362245-5`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              withWebp: false,
              backgroundColor: "#303030",
              useMozJpeg: true,
              defaultQuality: 95,
              showCaptions: true,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GCSE Revision Website`,
        short_name: `GCSE Revision`,
        start_url: `/?utm_source=pwa`,
        background_color: `#303030`,
        theme_color: `#ff9800`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-remove-console",
      options: {
        exclude: ["error", "warn", "info"], // <- will not be removed
      },
    },
    `gatsby-plugin-material-ui`,
  ],
}

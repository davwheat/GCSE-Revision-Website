/* eslint-disable */
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `GCSE: Revise It!`,
    description: `A free revision website aimed at GCSE students.`,
    author: `@davwheat`,
    siteUrl: "https://gcse-revision-site.firebaseapp.com",
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
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
        name: `GCSE: Revise It!`,
        short_name: `Revise It!`,
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
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: false,
          database: false,
          firestore: false,
          storage: false,
          messaging: true,
          functions: false,
          performance: true,
          analytics: true,
        },
      },
    },
  ],
}

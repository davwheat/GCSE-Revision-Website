/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: `Free GCSE Revision`,
    description: `A free revision tool for GCSE students.`,
    author: `@davwheat`,
    siteUrl: "https://gcse-revision-site.firebaseapp.com",
  },
  plugins: [
    `gatsby-plugin-material-ui`,
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
              maxWidth: 1000,
              withWebp: true,
              backgroundColor: "#303030",
              useMozJpeg: true,
              defaultQuality: 85,
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
        background_color: `#ae5c2d`,
        theme_color: `#ff9800`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-remove-console",
      options: {
        exclude: ["error", "warn", "info"], // <- will not be removed
      },
    },
  ],
}

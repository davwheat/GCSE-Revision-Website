/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: `Free GCSE Revision`,
    description: `A free revision tool for GCSE students.`,
    author: `@davwheat`,
  },
  plugins: [
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
        name: `articles`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
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

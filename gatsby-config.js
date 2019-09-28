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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
  ],
}

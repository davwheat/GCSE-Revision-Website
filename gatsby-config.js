/* eslint-disable */
require("dotenv").config()

const workboxConfig = {
  runtimeCaching: [
    {
      // Use cacheFirst since these don't need to be revalidated (same RegExp
      // and same reason as above)
      urlPattern: /(\.js$|\.css$|static\/)/,
      handler: `CacheFirst`,
    },
    {
      // page-data.json files are not content hashed
      urlPattern: /^https?:.*\page-data\/.*\/page-data\.json/,
      handler: `NetworkFirst`,
    },
    {
      // AdSense
      urlPattern: /^https:\/\/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js$/,
      handler: `NetworkOnly`,
    },
    {
      // Add runtime caching of various other page resources
      urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
      handler: `StaleWhileRevalidate`,
    },
  ],
  // Set skipWaiting to false. That's the only change in config.
  skipWaiting: false,
  clientsClaim: true,
}

module.exports = {
  siteMetadata: {
    title: `GCSE: Revise It!`,
    description: `A free revision website aimed at GCSE students.`,
    author: `David Wheatley`,
    siteUrl: "https://gcsereviseit.co.uk",
    version: `1.0.0a-beta`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            subsets: [`latin-ext`],
            variants: [
              `400`,
              `400i`,
              `500`,
              `500i`,
              `600`,
              `600i`,
              `700`,
              `700i`,
            ],
          },
          {
            family: `Fira Mono`,
            variants: [`400`, `400i`, `700`, `700i`],
          },
        ],
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
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
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./src/sw.js`),
        workboxConfig,
      },
    },
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
        credentials: {
          apiKey: "AIzaSyAUsSHGZ3LabYNchpn3mrCGd1hmzraTqus",
          authDomain: "gcse-revision-site.firebaseapp.com",
          databaseURL: "https://gcse-revision-site.firebaseio.com",
          projectId: "gcse-revision-site",
          storageBucket: "gcse-revision-site.appspot.com",
          messagingSenderId: "362657041117",
          appId: "1:362657041117:web:0a4feb1735a34648166934",
          measurementId: "G-NNZ4B2E33G",
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        createLinkInHead: true,
        sitemapSize: 10000,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        // exclude: ["/category/*", `/path/to/page`],
      },
    },
    //`gatsby-plugin-preload-link-crossorigin`,
  ],
}

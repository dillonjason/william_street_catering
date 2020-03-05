module.exports = {
  siteMetadata: {
    title: `William Street Catering`,
    description: `Primary Site for William Street Catering`,
    author: `dillonjason`,
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
        name: `william-street-catering`,
        short_name: `williamst`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-32959835-7",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "5il7noge",
        dataset: "production",
        token: process.env.SANITY_READ,
        overlayDrafts: process.env.DRAFTS === "true",
        watchMode: process.env.DRAFTS === "true",
      },
    },
  ],
}

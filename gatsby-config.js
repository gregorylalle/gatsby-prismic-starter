const globImporter = require('node-sass-glob-importer');

require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        importer: globImporter(),
      },
    },
    // {
    //   resolve: 'gatsby-plugin-prismic-preview',
    //   options: {
    //     repositoryName: 'prismic-gatsby-stack',
    //     linkResolver: require('./src/components/utils/linkResolver'),
    //     path: '/preview',
    //   }
    // },
    {
      resolve: 'gatsby-plugin-brotli'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/gatsby-icon.png`,
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        defaultLang: 'fr-fr',
        path: '/preview',
        previews: true,
        pages: [
          { // optional
            type: 'Post', // TypeName from prismic
            match: '/article/:uid', // pages will be generated under this pattern (optional)
            path: '/article', // placeholder page for unpublished documents
            component: require.resolve('./src/templates/post.js'),
          }
          // { // optional
          //   type: 'Case Study',
          //   match: '/projets/:uid',
          //   path: '/projets',
          //   component: require.resolve('./src/templates/page.js'),
          // }
        ],
        sharpKeys: [
          /image|photo|picture/, // (default)
          'profilepic',
        ],
      }
    },
    `gatsby-plugin-offline`,
  ],
}

const path = require(`path`)
const mediaFields = require('./blocks/fragments/media')
const seoFields = require('./blocks/fragments/seo')
const blocks = require('./blocks/all')


module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
  query GET_POSTS {
      prismic {
          allCase_studys {
              edges {
                  node {
                      _meta {
                          id
                          uid
                          type
                      }
                      body {
                          __typename
                          ${blocks.intro}
                      }
                  }
              }
          }
      }
  }
`


  const { createPage } = actions

  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      return data.prismic.allCase_studys.edges
    })

  await fetchPages({ first: 100 }).then(allPages => {

    allPages.map(page => {
      console.log(`create page: ${page.node._meta.uid}`)

      const { isFrontPage } = page
      const uri = isFrontPage ? '/' : `/${page.uri}`

      actions.createPage({
          path: `/projets/${page.node._meta.uid}`,
          component: path.resolve('./src/templates/page.js'),
          context: {
              ...page,
              title: page.title,
          }
      })
    })
  })
}
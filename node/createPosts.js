const path = require(`path`)
const blocks = require('./blocks/all')

module.exports = async ({ actions, graphql }) => {
  const query = `
  query GET_POSTS {
    prismic {
        allPosts {
            edges {
                node {
                    _meta {
                        id
                        uid
                        type
                    }
                    title
                    body {
                        __typename
                        ${blocks.ImageCaption}
                        ${blocks.PostText}
                    }
                }
            }
        }
    }
}
`


  const { createPage } = actions

  const fetchPages = async variables =>
    await graphql(query, variables).then(({ data }) => {
      return data.prismic.allPosts.edges
    })

  await fetchPages({ first: 100 }).then(allPosts => {

    allPosts.map(post => {
      console.log(`create post: ${post.node._meta.uid}`)

      const { isFrontPage } = post
      const uri = isFrontPage ? '/' : `/${post.uri}`

      actions.createPage({
          path: `/article/${post.node._meta.uid}`,
          component: path.resolve('./src/templates/post.js'),
          context: {
              ...post,
              title: post.title,
          }
      })
    })
  })
}
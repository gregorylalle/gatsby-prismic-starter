const path = require(`path`)
const mediaFields = require('./blocks/fragments/media')
// const seoFields = require('./blocks/fragments/seo')
const blocks = require('./blocks/all')

module.exports = async ({ actions, graphql }) => {
  const GET_CASES = `
  query GET_CASES($first:Int){
    wordpress {
      projects(
        first: $first 
      ) {
        nodes {
          id
          uri
          title
          featuredImage {
						${mediaFields}
					}
          blocks {
            isValid
						name
						originalContent
            ${blocks.intro}
					}
        }
      }
    }
  }
  `
  const { createPage } = actions

  const fetchCases = async variables =>
    await graphql(GET_CASES, variables).then(({ data }) => {
      return data.wordpress.projects.nodes
    })

  await fetchCases({ first: 100 }).then(allCases => {
    allCases.map(caseStudy => {
      console.log(`create case: ${caseStudy.uri}`)

        actions.createPage({
            path: `/projets/${caseStudy.uri}`,
            component: path.resolve('./src/components/templates/case/case.jsx'),
            context: {
                ...caseStudy,
                title: caseStudy.title,
                id: caseStudy.id,
                slug: caseStudy.slug,
            }
        })
    })
  })
}
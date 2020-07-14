import { useStaticQuery, graphql } from "gatsby"
export const useSiteMenuData = () => {
  const { prismic } = useStaticQuery(
    graphql`
        query MenuData {
            prismic {
                allNavigations {
                    edges {
                        node {
                            nav {
                                ... on PRISMIC_NavigationNavNav_item {
                                primary {
                                    label
                                    link {
                                        _linkType
                                        ... on PRISMIC_Postpage {
                                            title
                                            _linkType
                                            _meta {
                                            uid
                                            }
                                        }
                                    }
                                }
                                }
                            }
                        }
                    }
                }
            }
        }
    `
  )
  return prismic.allNavigations.edges[0].node.nav
}

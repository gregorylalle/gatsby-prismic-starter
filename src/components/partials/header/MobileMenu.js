import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"
import { RichText } from 'prismic-reactjs'

const MobileMenu = ( props ) => {

  	const data = useStaticQuery(
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
                                            ... on PRISMIC_Casepage {
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

  const menuData = data.prismic.allNavigations.edges[0].node.nav

  return (
    <div className={`mobile-menu ${props.toggle ? `` : 'open'}`}>
        <nav className="mobile-menu__nav">
			{menuData.map((item, index) =>
                <MenuItem key={`header-nav-${index}`} item={item} />
            )}
        </nav>
    </div>
  )
}

const MenuItem = ({ item }) => {
	const url = item.primary.link._meta.uid
	const title = RichText.asText(item.primary.label)

	return <Link to={ `/${url}` }>{title}</Link>
}

export default MobileMenu

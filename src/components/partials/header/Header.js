import React, { useState } from 'react'
import Link from 'gatsby-link'
import { useStaticQuery, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Toggler from './Toggler'
import MobileMenu from './MobileMenu'
import Logo from '../../../../static/logo/logo.svg'

const Header = () => {
  	const [menuOpen, toggleMenu] = useState(true)
  	const data = useStaticQuery(
    graphql`
        query HeaderMenuData {
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
	console.log(menuData)
  // const menuLength = menuData.length
  // const lastItem = menuData[menuLength - 1]

  	return (
		<div className="header">
			<div className="container h-100">
				<div className="row align-items-center justify-content-between h-100">
					<div className="col-auto h-100">
						<Link to="/" className="header__logo" aria-label="Logo">
							<Logo/>
						</Link>
					</div>
					<div className="col-auto d-none d-md-flex">
						<nav className="header__menu">
							{menuData.map(
							(item, index) =>
								<MenuItem key={`header-nav-${index}`} item={item} />
							)}
						</nav>
					</div>
					<Toggler burgerEvent={() => toggleMenu(!menuOpen)} toggle={menuOpen}/>
					<MobileMenu toggle={menuOpen}/>
				</div>
			</div>
		</div>
  	)
}

const MenuItem = ({ item }) => {
  	const url = item.primary.link._meta.uid
  	const title = RichText.asText(item.primary.label)

  	return <Link to={`/${url}`}>{title}</Link>
}


export default Header

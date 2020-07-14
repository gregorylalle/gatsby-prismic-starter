import React from "react"
// import Link from "gatsby-link"
// import { useSiteMenuData } from "../../particles/hooks/useSiteMenuData"
// import { useRelative } from "../../particles/hooks/useRelative"

// import Logo from "../../../assets/images/logo/logo.svg"

const Footer = () => {
    // const menuData = useSiteMenuData()
    // const footerData = menuData.nodes.find(menu => menu.slug === "footer")

  return (
    <footer className="footer">
        <div className="container h-100">
            <div className="row align-items-center justify-content-between h-100">
                <div className="col-md-auto col-sm-24">
                    <div className="footer__logo">
                        {/* <Link to="/" className="footer__logo-link">
                            <Logo/>
                        </Link> */}
                    </div>
                </div>
                {/* <div className="col-md-auto col-sm-24">
                  <nav className="footer__menu">
                      <div className="copyright">© Gatsby Starter {new Date().getFullYear()}</div>
                      {footerData.menuItems.nodes.map(
                      (item, index) =>
                          <MenuItem key={`footer-nav-${index}`} {...item} />
                      )}
                  </nav>
                </div> */}
            </div>
        </div>
    </footer>
  )
}

// const MenuItem = ({ label, url }) => {
//   const relativeLink = useRelative(url)
//   return <Link to={relativeLink}>{label}</Link>
// }

export default Footer

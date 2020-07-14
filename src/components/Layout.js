import React from "react"
import PropTypes from "prop-types"

import Header from "./partials/header/Header"
import Footer from "./partials/footer/Footer"

const Layout = ({ children }) => {
  
	return (
		<>
			<Header/>
			<div className="page">
				{children}
			</div>
			<Footer/>
		</>
	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

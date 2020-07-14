import React from "react"
import Layout from '../components/Layout'
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<h1>Hello from Gatsby Prismic Starter <span role="img" aria-label="emoji">👿</span></h1>
				</div>
				<div className="col-md-6">
					<h2>Blablabla</h2>
					<Link to="/projets">Projets</Link>
				</div>
			</div>
		</div>
	</Layout>
)

export default IndexPage

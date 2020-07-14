import React from "react"
import { RichText } from 'prismic-reactjs'
import SEO from "../components/seo"

import ComponentParser from "../components/utils/ComponentParser"
import Layout from '../components/Layout'

const PageTemplate = ({ pageContext }) => {
    if (!pageContext.node) return null

    return (
        <Layout context={pageContext}>
            <SEO title="Actualités" />
            <section className="post-intro">
                <div className="container">
                    <div className="row">
                        <div className="col-24">
                            {pageContext.node.title &&
                                <h2 data-parallax>{RichText.asText(pageContext.node.title)}</h2>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <ComponentParser content={pageContext.node.body} />
        </Layout>
    )
}

export default PageTemplate

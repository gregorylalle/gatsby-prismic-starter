import React from "react"

import ComponentParser from "../components/utils/ComponentParser"
import Layout from '../components/Layout'

const PageTemplate = ({ pageContext }) => (
    <Layout context={pageContext}>
        {console.log(pageContext.node.body)}
        <ComponentParser content={pageContext.node.body} />
    </Layout>
)

export default PageTemplate

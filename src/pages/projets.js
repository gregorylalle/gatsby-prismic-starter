import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"
import { linkResolver } from '../components/utils/linkResolver'

import Layout from '../components/Layout'

const Projets = ({data}) => {
  const cases = data.prismic.allCase_studys.edges
  console.log(cases)

  return (
    <Layout>
      <section className="posts">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h1>Project page</h1>
                        {console.log(cases)}
                        {cases.map((project) => {
                          return <Link to={ linkResolver(project.node._meta) }>{RichText.asText(project.node.caseStudy_title)}</Link>
                        })}
                  </div>
              </div>
          </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Cases {
    prismic {
      allCase_studys {
        edges {
          node {
            caseStudy_title
            _meta {
              uid
              id
              type
            }
          }
        }
      }
    }
  }
`

export default Projets
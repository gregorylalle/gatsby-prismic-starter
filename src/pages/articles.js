import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import SEO from "../components/seo"

import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'

const Articles = ({data}) => {
  const node = data.prismic.allPostpages.edges[0].node
  const posts = data.prismic.allPosts.edges

  if(!node) return null;

  return (
    <Layout>
      <SEO title="Actualités" />
      <section className="posts">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h1>{ RichText.asText(node.title) }</h1>
                  </div>
              </div>
          </div>
          <BlogPosts posts={ posts }/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query PostPageQuery {
    prismic {
      allPostpages {
        edges {
          node {
            title
          }
        }
      }
      allPosts {
        edges {
          node {
            title
            _meta {
              uid
              id
              type
            }
            body {
              ... on PRISMIC_PostBodyText {
                type
                label
                primary {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`
export default Articles
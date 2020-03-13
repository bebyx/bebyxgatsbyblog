import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ( {data} ) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <h4>Всього постів на блозі: {data.allMarkdownRemark.totalCount}</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
          <h3>{node.frontmatter.title}{" "}— {node.frontmatter.date}</h3>
          <p>{node.excerpt}</p>
      </div>
      ))}

    <Link to="/about">Про блоґ</Link>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage

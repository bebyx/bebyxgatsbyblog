import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ( {data} ) => (
  <Layout>
    <SEO title={data.site.siteMetadata.title} />
    <h4>Всього постів на блозі: {data.allMarkdownRemark.totalCount}</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
          <hr/>
          <Link class="article-title-link" to={node.fields.slug}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <span style={{color: `silver`}}>— {node.frontmatter.date}</span>
          <p>{node.excerpt}</p>
          <p><Link class="readmore" to={node.fields.slug}>Читати далі</Link></p>
      </div>
      ))}
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
            date(
              formatString: "DD MMMM, YYYY",
              locale: "uk-UA"
            )
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage

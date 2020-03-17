import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ( {data} ) => (
  <Layout>
    <SEO title={data.site.siteMetadata.title + "— блоґ про Лінукс, поезію та інше"} />
    <h4>Всього постів на блозі: {data.allMarkdownRemark.totalCount}</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
          <hr/>
          <Link class="article-title-link" to={node.fields.slug}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <span style={{color: `silver`}}> — {node.frontmatter.date}</span>
          <p>{node.excerpt}</p>
          <p style={{
            display: `flex`,
            justifyContent: `space-between`,
            flexWrap: `wrap`,
            }}
          >
          <Link class="readmore" to={node.fields.slug}>Читати далі</Link>
          <ul class="nav-list">
            {node.frontmatter.tags.map((item, i) => (
              <li key={i}>
                <Link to={`/tags/${kebabCase(item)}/`}>
                  <button class="btn-tag">
                      {item}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
          </p>
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
            tags
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

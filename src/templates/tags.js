import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `Постів з теґом "${tag}": ${totalCount}`

  return (
    <Layout>
      <SEO title={`Пости з теґом "${tag}"`} description={`Пости з теґом "${tag}" на блозі ${data.site.siteMetadata.title}`} />
      <div class="special-page">
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title, date } = node.frontmatter
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link> — {date}
              </li>
            )
          })}
        </ul>
        <p align="center"><Link to="/tags"><b>Всі теґи</b></Link></p>
        </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(
              formatString: "DD MMMM, YYYY"
              locale: "uk_UA"
            )
          }
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

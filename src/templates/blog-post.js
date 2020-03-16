import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <span style={{color: `silver`}}> — {post.frontmatter.date}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
        date(
          formatString: "DD MMMM, YYYY"
          locale: "uk_UA"
        )
      }
      excerpt
    }
  }
`

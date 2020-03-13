import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ( {data} ) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>{data.site.siteMetadata.description}</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default IndexPage

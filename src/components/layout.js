/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteMetadata={data.site.siteMetadata} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 720,
          padding: `0 1.0875rem 1.45rem`,
        }}
        class="link-style"
      >
        <main>{children}</main>
        <footer style={{textAlign: `right`, fontSize: `small`,}}>
            <hr/>
            © {new Date().getFullYear()} — <a href="https://github.com/bebyx/bblog"
              target="_blank" rel="noopener noreferrer">bblog</a> від <b>bebyx</b> за допомогою Gatsby
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

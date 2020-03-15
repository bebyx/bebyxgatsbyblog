import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

function Header({ siteMetadata }) {

  function isActive({isCurrent}) {
    return isCurrent ?
    { dangerouslySetInnerHTML: {__html: `<h1>${siteMetadata.title}</h1>`} } :
    { dangerouslySetInnerHTML: {__html: `<span class="header">${siteMetadata.title}</span>` } }
  }

  return(
    <header
      style={{
        background: `green`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 720,
          padding: `1.45rem 1.0875rem`,
          textAlign: `center`
        }}
      >
        <>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            getProps={isActive}
          />
          <p style={{
            color: `white`,
          }}>
          {siteMetadata.description}
          </p>
          <p>
            <nav>
              <ul class="nav-list">
                <li>
                  <Link to="/">Фасад</Link>
                </li>
                <li>
                  <Link to="/pro-blog">Про блоґ</Link>
                </li>
              </ul>
            </nav>
          </p>
        </>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteMetadata: PropTypes.object,


}

Header.defaultProps = {
  siteMetadata: {
    title : ``,
    description: ``,
  },
}

export default Header

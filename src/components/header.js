import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

function Header({ siteTitle }) {

  function isActive({isCurrent}) {
    return isCurrent ?
    { dangerouslySetInnerHTML: {__html: `<h1>${siteTitle}</h1>`} } :
    { dangerouslySetInnerHTML: {__html: `<strong>${siteTitle}</strong>` } }
  }

  return(
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <>
          <Link
            to="/"
            class="header"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
            getProps={isActive}
          />
        </>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,

}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

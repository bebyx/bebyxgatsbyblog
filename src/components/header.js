import { Link, Match } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

function Header({ siteTitle }) {

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
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            getProps={isActive}
          />
        </h1>
        <p>{siteTitle}</p>
      </div>
    </header>
  )
}

function isActive({isCurrent}) {
  return isCurrent ? { dangerouslySetInnerHTML: {__html: '<h1>wow</h1>'} } : null
}

Header.propTypes = {
  siteTitle: PropTypes.string,

}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

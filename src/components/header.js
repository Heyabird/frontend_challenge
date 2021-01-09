import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
  >
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        position: 'absolute',
        zIndex: 2,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,          
          }}
        >
          {siteTitle}
        </Link>
        <div
          style={{
            display: `inline`,          
          }}
        >
          <Link>What's included?</Link>
          <Link>Pricing</Link>
          <Link>Sign in</Link>
          <Link>Get Started</Link>
        </div>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

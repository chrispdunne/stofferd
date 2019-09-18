import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `red`,
      marginBottom: `1.45rem`,
      position: "absolute",
      zIndex: "3",
    }}
  >
    <h1 style={{}}>
      <Link
        to="/"
        style={{
          color: `#fff`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
    position: fixed;
    z-index: 3;
    right: 2rem;
    top: 2rem;
`

const Header = ({ siteTitle }) => (
    <StyledHeader>
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
    </StyledHeader>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

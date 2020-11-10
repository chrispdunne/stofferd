import React from "react"
import styled from "styled-components"
import classNames from "classnames"
import "../index.css"

import LogoToggle from "./LogoToggle"
import Menu from "./Menu"

type Props = {
    fixed?: boolean
    white?: boolean
}

const StyledNav = styled.div`
    &.fixed {
        position: fixed;
        width: 100%;
        z-index: 1;
    }
    &.white {
        a {
            span {
                color: #fff;
            }
            &:visited {
                color: #fff;
                span {
                    color: #fff;
                }
            }
        }
    }
    ul {
        position: fixed;
        z-index: 2;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    li {
        list-style-type: none;
        text-align: right;
    }
    a {
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 20px;
        padding: 1rem 3rem;
        display: inline-block;
    }
    .nav-link {
        span {
            display: inline-block;
            transition: all 0.25s ease-in-out;
        }
        &:hover {
            span {
                transform: rotate(180deg);
            }
        }
    }
    .logo {
        position: fixed;
        z-index: 1;
        right: 0;
        top: 2rem;
    }
    .logo__img {
        max-width: 6rem;
    }
    .reverse {
        .logo:hover > div {
            background: #fff;
        }
        .logo,
        ul {
            left: 0;
            right: initial;
        }
        ul {
            padding: 0;
        }
        li {
            text-align: left;
        }
        a {
            color: blue;
        }
    }
    /* 979px */
    @media only screen and (max-width: 61.1875em) {
        ul.main {
            left: -120vw;
            transition: left 0.3s ease-in;
            z-index: 4;
            max-width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0;
            top: 50%;
            transform: translateY(-50%);
        }
        &.active {
            z-index: 4;
            ul.main {
                left: 0;
            }
        }
        .logo {
            position: static;
            padding: 2rem;
        }
    }
`

function Nav({ fixed, white }: Props) {
    let scrollTop = 0
    const [scrollingUp, setScrollingUp] = React.useState(false)
    const [mobNavVis, setMobNavVis] = React.useState(false)
    const handleScroll = React.useCallback((e) => {
        if (!window) return
        if (window.scrollY < scrollTop && window.scrollY > 300) {
            requestAnimationFrame(() => setScrollingUp(true))
        } else {
            requestAnimationFrame(() => setScrollingUp(false))
        }

        scrollTop = window.scrollY
    }, [])

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <StyledNav
            id="nav"
            className={classNames({ active: mobNavVis, fixed, white })}
        >
            <LogoToggle mobNavVis={mobNavVis} setMobNavVis={setMobNavVis} />
            {/* <LogoToggle
                mobNavVis={mobNavVis}
                setMobNavVis={setMobNavVis}
                className={classNames("fixed", {
                    visible: scrollingUp,
                })}
            /> */}

            <Menu className="main" mobNavVis={mobNavVis} />
        </StyledNav>
    )
}

export default Nav

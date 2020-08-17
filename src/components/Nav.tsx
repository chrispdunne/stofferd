import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import classNames from "classnames"
import "../index.css"

import Logo from "./Logo"
import LogoToggle from "./LogoToggle"
import Menu from "./Menu"
// import Pixelation from "../components/Pixelation"
import pixelate from "../img/pixelate.gif"

type Props = {
    double?: boolean
}
const StyledNav = styled.div`
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
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 20px;
        padding: 1rem 3rem;
        display: inline-block;
    }
    .nav-link {
        transition: transform 0.25s ease-in-out;

        span {
            background-image: url(${pixelate});
            background-size: 0;
            background-repeat: repeat-x;
            background-position: center;
        }
        &:hover {
            /* transform: scale(1.2); */
            span {
                background-size: 29px 14px;
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
            color: #000;
        }
    }
    /* 979px */
    @media only screen and (max-width: 61.1875em) {
        ul.main {
            left: -100vw;
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

function Nav({ double = false }: Props) {
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
        <StyledNav id="nav" className={mobNavVis ? "active" : ""}>
            <LogoToggle mobNavVis={mobNavVis} setMobNavVis={setMobNavVis} />
            <LogoToggle
                mobNavVis={mobNavVis}
                setMobNavVis={setMobNavVis}
                className={classNames("fixed", {
                    visible: scrollingUp,
                })}
            />

            <Menu className="main" mobNavVis={mobNavVis} />
            {double && (
                <div className="reverse desktop" id="nav">
                    <Link to="/" className="logo">
                        <Logo background="#000" />
                    </Link>
                    <Menu className="desktop" />
                </div>
            )}
        </StyledNav>
    )
}

export default Nav

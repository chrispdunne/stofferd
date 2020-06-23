import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import classNames from "classnames"
import "../index.css"

import Logo from "../Logo"
import Toggle from "./Toggle"
// import Pixelation from "../components/Pixelation"

type Props = {
    className?: string
}

type LogoToggleProps = {
    className?: string
    mobNavVis: boolean
    setMobNavVis: (v: boolean) => void
}

const StyledNav = styled.div`
    ul {
        position: fixed;
        z-index: 1;
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
            right: -25rem;
            transition: right 0.25s ease-in-out;
            z-index: 4;
            background: #000;
            height: 20rem;
            width: 12rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0;
            border-radius: 100%;
            padding: 0 8rem 0 0;
            box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.5);
        }
        &.active {
            ul.main {
                right: -8rem;
            }
        }
        .logo {
            position: static;
            padding: 2rem;
        }
    }
`

const LogoToggl = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    &.fixed {
        position: fixed;
        background-color: #000;
        z-index: 4;
        top: -10rem;
        transition: top 0.3s ease-in-out;
        &.visible {
            top: 0rem;
        }
    }
`

const Menu = ({ className = "" }: Props) => {
    return (
        <ul className={className}>
            <li id="about">
                <Link to="/about">About</Link>
            </li>

            <li id="contact">
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

const LogoToggle = ({
    className = "",
    mobNavVis,
    setMobNavVis,
}: LogoToggleProps) => {
    return (
        <LogoToggl className={className}>
            <Toggle mobNavVis={mobNavVis} setMobNavVis={setMobNavVis} />

            <Link to="/" className="logo">
                <Logo />
            </Link>
        </LogoToggl>
    )
}
function Nav() {
    let scrollTop = 0
    const [scrollingUp, setScrollingUp] = React.useState(false)
    const [mobNavVis, setMobNavVis] = React.useState(false)

    const scrollingOn = React.useCallback(() => {
        setScrollingUp(true)
    }, [])
    const scrollingOff = React.useCallback(() => {
        setScrollingUp(false)
    }, [])
    const handleScroll = React.useCallback((e) => {
        if (!window) return
        if (window.scrollY < scrollTop && window.scrollY > 300) {
            requestAnimationFrame(scrollingOn)
        } else {
            requestAnimationFrame(scrollingOff)
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

            <Menu className="main" />
            <div className="reverse desktop" id="nav">
                <Link to="/" className="logo">
                    <Logo background="#000" />
                </Link>
                <Menu className="desktop" />
            </div>
        </StyledNav>
    )
}

export default Nav

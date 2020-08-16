import React from "react"
import { Link } from "gatsby"
import Toggle from "./Toggle"
import styled from "styled-components"
import Logo from "./Logo"

type Props = {
    className?: string
    mobNavVis: boolean
    setMobNavVis: (v: boolean) => void
}

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

const LogoToggle = ({ className = "", mobNavVis, setMobNavVis }: Props) => {
    return (
        <LogoToggl className={className}>
            <Toggle mobNavVis={mobNavVis} setMobNavVis={setMobNavVis} />

            <Link to="/" className="logo">
                <Logo />
            </Link>
        </LogoToggl>
    )
}

export default LogoToggle

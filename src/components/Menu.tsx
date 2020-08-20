import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

type Props = {
    className?: string
    mobNavVis?: boolean
}

const MenuContainer = styled.div`
    overflow: hidden;
    position: absolute;
    height: 100vh;
    width: 100%;
`

const EyeBallGlow = styled.div`
    position: absolute;
    z-index: 3;
    top: calc(40% - 70px);
    left: calc(50% - 70px);
    transform: translateX(-50%) translateY(-50%);
    background: rgba(0, 0, 0, 0.9);
    width: 0;
    height: 0;
    border-radius: 100%;
    transition: all 0.5s ease-out 0.3s;
    &.grown {
        width: 100rem;
        height: 100rem;
    }
`

const Menu = ({ className = "", mobNavVis }: Props) => {
    return (
        <MenuContainer>
            <ul className={className}>
                <li id="about" className="nav-link">
                    <Link to="/about">
                        <span>About</span>
                    </Link>
                </li>

                <li id="contact" className="nav-link">
                    <Link to="/contact">
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
            <EyeBallGlow className={mobNavVis ? "grown" : "shrunk"} />
        </MenuContainer>
    )
}

export default Menu

import React from "react"
import styled from "styled-components"
import classNames from "classnames"
import { Link } from "gatsby"

type Props = {
    className?: string
    title: string
    subtitle?: string
    color?: string
    children?: React.ReactNode
    img?: React.ReactNode
    btnLink?: string
}

const Section = styled.section`
    height: 100vh;
    position: relative;
    color: #fff;
    scroll-snap-align: start;

    &.white {
        color: #000;
        .text {
            right: 3rem;
            left: initial;
            text-align: right;
        }
        h2,
        h3,
        button,
        .btn a {
            color: #000;
            border-color: #000;
            &:before {
                background-color: #000;
            }
        }
        button:hover,
        button:hover a,
        .btn a:hover {
            color: #fff;
        }
        .cover {
            left: 50%;
            right: 0;
        }
    }
    button {
        margin-top: 1rem;
        margin-left: 0.1rem;
    }
    .client-logo {
        position: absolute;
        z-index: 5;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 3rem;
        z-index: 5;
    }
    h2,
    h3 {
        text-transform: uppercase;
        color: #fff;
    }
    h2 {
        font-size: 2rem;
        margin: 0.75rem 0 0.3rem;
        position: relative;
        left: -0.1rem;
    }
    h3 {
        font-size: 1rem;
        font-weight: normal;
        margin: 0 0 0.4rem;
    }
    .cover {
        position: absolute;
        z-index: 4;
        top: 0;
        bottom: 0;
        left: 0;
        right: 50%;
    }

    /* 979px */
    @media only screen and (max-width: 61.1875em) {
        .client-logo {
            top: 33%;
        }
        .text,
        &.white .text {
            top: 66%;
            text-align: center;
            width: 100%;
            right: initial;
            left: initial;
        }
    }
`
const HomeSection = ({
    color = "#fff",
    children,
    className = "",
    img,
    title,
    subtitle,
    btnLink,
}: Props) => {
    return (
        <Section
            className={classNames({ white: color === "#fff" }, className)}
            style={{ backgroundColor: color }}
        >
            <div className="text">
                {subtitle && <h3>{subtitle}</h3>}
                <h2>{title}</h2>
                {children}
                {btnLink && (
                    <Link to={btnLink}>
                        <button className="btn">Find out more</button>
                    </Link>
                )}
            </div>
            {img}
            <div style={{ backgroundColor: color }} className="cover desktop" />
        </Section>
    )
}

export default HomeSection

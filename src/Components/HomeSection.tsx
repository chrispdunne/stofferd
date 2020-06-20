import React from "react"
import styled from "styled-components"

type Props = {
    title: string
    subtitle?: string
    color?: string
    children?: React.ReactNode
    img?: React.ReactNode
}

const Section = styled.section`
    height: 100vh;
    position: relative;
    &.white {
        .text {
            right: 3rem;
            left: initial;
            text-align: right;
        }
        h2,
        h3,
        button {
            color: #000;
            border-color: #000;
            &:before {
                background-color: #000;
            }
            &:hover {
                color: #fff;
            }
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
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 3rem;
        z-index: 4;
    }
    h2,
    h3 {
        text-transform: uppercase;
        color: #fff;
    }
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1rem;
        font-weight: normal;
    }
    .cover {
        position: absolute;
        z-index: 1;
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
    img,
    title,
    subtitle,
}: Props) => {
    return (
        <Section
            className={color === "#fff" ? "white" : ""}
            style={{ backgroundColor: color }}
        >
            <div className="text">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                {children}

                <button className="btn">Find out more</button>
            </div>
            {img}
            <div style={{ backgroundColor: color }} className="cover desktop" />
        </Section>
    )
}

export default HomeSection

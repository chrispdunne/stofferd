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
        }
    }
    button {
        margin-top: 1rem;
        margin-left: 0.1rem;
    }
    .client-logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 3rem;
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
                <button className="btn">Find out more</button>
            </div>
            {img}
            {children}
        </Section>
    )
}

export default HomeSection

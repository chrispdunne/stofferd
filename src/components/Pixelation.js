import React from "react"
import styled from "styled-components"

const Pixels = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    div {
        width: 0.5rem;
        height: 0.5rem;
        background: black;
        animation-name: pixelColor;
        animation-duration: 0.3s;
        animation-iteration-count: infinite;

        &.white {
            background: white;
        }
    }
`

const Pixelation = () => {
    return (
        <Pixels>
            {[...Array(999)].map((e, i) => {
                return (
                    <div
                        key={i}
                        style={{ animationDelay: Math.random() + "s" }}
                        // className={Math.random() > 0.5 ? "white" : ""}
                    />
                )
            })}
        </Pixels>
    )
}

export default Pixelation

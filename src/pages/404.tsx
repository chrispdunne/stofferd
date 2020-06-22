import React from "react"
import Nav from "../components/Nav"
import styled from "styled-components"

const FourOhFour = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`
const NotFound = () => {
    return (
        <div>
            <Nav />
            <FourOhFour>404</FourOhFour>
        </div>
    )
}

export default NotFound

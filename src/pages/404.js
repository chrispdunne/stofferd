import React from "react"
import Nav from "../components/Nav.tsx"
import styled from "styled-components"

const FourOhFour = styled.div`
    width: 100%;
    height: 100vh;
    background: #000;
    .msg {
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
`
const NotFound = () => {
    return (
        <FourOhFour>
            <Nav />
            <div className="msg">Page not found</div>
        </FourOhFour>
    )
}

export default NotFound

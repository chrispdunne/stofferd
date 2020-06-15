import React from "react"
import Eye from "../Components/Eye"
import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
`
const Caption = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    h1 {
        color: #fff;
        font-size: 2rem;
    }
    h3 {
        color: #fff;
        font-weight: normal;
        font-size: 1rem;
    }

    button {
        appearance: none;
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
        cursor: pointer;
        font-family: "G", sans-serif;
        padding: 0.3rem 0.7rem 0.4rem;
        font-size: 0.75rem;
    }
`

const Home = () => {
    return (
        <Container>
            <Caption>
                <h3>REACT, WORDPRESS, TYPESCRIPT</h3>
                <h1>DEVELOPER</h1>
                <button>FIND OUT MORE</button>
            </Caption>
            <Eye />
            <Container />
        </Container>
    )
}

export default Home

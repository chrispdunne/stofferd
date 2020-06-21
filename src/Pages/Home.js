import React from "react"
import Eye from "../components/Eye"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import HomeSection from "../components/HomeSection"
import nike from "../img/nike.png"
import ey from "../img/ey.png"
import firm from "../img/firm.png"

const Container = styled.div`
    height: 100vh;
    @media only screen and (max-width: 61.1875em) {
        canvas {
            height: 80vh !important;
            width: 80vw !important;
            margin: auto;
        }
    }
`
const Caption = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    padding-left: 3rem;
    background: #000;
    h1 {
        color: #fff;
        font-size: 2rem;
    }
    h3 {
        color: #fff;
        font-weight: normal;
        font-size: 1rem;
        margin-left: 0.1rem;
    }
    .btn {
        margin-top: 0.5rem;
        margin-left: 0.2rem;
    }
    #pinContainer {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        .panel {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            right: 0rem;
            /* text-align: right; */
            background-color: rgba(0, 0, 0, 0.7);
            padding: 1.5rem 1.2rem 1.5rem;
            margin-right: 2rem;
            span {
                color: #fff;
                display: block;
                max-width: 12rem;
            }
        }
    }
    @media only screen and (max-width: 61.1875em) {
        background: transparent;
        text-align: center;
        top: 65vh;
        width: 100%;
        padding-left: 0;
    }
`

const Home = () => {
    return (
        <>
            <Container>
                <Caption>
                    <h3>REACT, WORDPRESS, TYPESCRIPT</h3>
                    <h1>DEVELOPER</h1>
                    <button className="btn">FIND OUT MORE</button>
                </Caption>
                <Eye />
            </Container>
            <div id="trigger" style={{ position: "absolute", top: "70vh" }} />

            <HomeSection
                title="Nike"
                subtitle="React, WordPress"
                img={<img className="client-logo" src={nike} alt="Nike" />}
            />

            <HomeSection
                color="#000"
                title="Ernst &amp; Young"
                subtitle="React, TypeScript, GraphQl"
                img={
                    <img
                        className="client-logo"
                        src={ey}
                        alt="Ernst &amp; Young"
                    />
                }
            />
        </>
    )
}

export default Home

import React from "react"
import Eye from "../Components/Eye"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"

const Container = styled.div`
    height: 100vh;
`
const Caption = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    padding-left: 3rem;
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
`

const Home = ({ navRef }) => {
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
            <div id="trigger" />
            <div style={{ height: "100vh" }} />

            <Controller>
                <Scene
                    // duration={200}
                    classToggle="zap"
                    triggerElement="#trigger"
                    indicators={true}
                >
                    {(progress, event) => (
                        <div className="test">
                            Pin Test {event.type} {progress}
                        </div>
                    )}
                </Scene>
                {/* <Scene
                    classToggle={[".test", "yellow"]}
                    reverse={false}
                    indicators={true}
                >
                    <div>Toggle other class</div>
                </Scene> */}
            </Controller>
        </>
    )
}

export default Home

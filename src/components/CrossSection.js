import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"

import bgImg from "../images/isometic-underlay.jpg"
import fgImg from "../images/isometic-overlay.png"

const CrossSectionStyled = styled.div`
    overflow: hidden;
    #pinContainer {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        .panel {
            height: 100vh;
            width: 100vw;
            position: absolute;
            text-align: center;
        }
    }
    .bg {
        background-image: url(${bgImg});
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
    }
    .fg {
        position: absolute;
        top: 0;
        background-image: url(${fgImg});
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
    }
    .panel span {
        position: relative;
        display: block;
        top: 50%;
        font-size: 80px;
    }
`

const CrossSection = () => (
    <CrossSectionStyled>
        <Controller>
            <Scene triggerHook="onLeave" duration="200%" pin>
                <Timeline wrapper={<div id="pinContainer" />}>
                    <div className=" bg" />

                    <Tween from={{ x: "0%" }} to={{ x: "30%" }}>
                        <div className=" fg" />
                    </Tween>

                    <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
                        <section className="panel green">
                            <span>This</span>
                        </section>
                    </Tween>
                </Timeline>
            </Scene>
        </Controller>
    </CrossSectionStyled>
)

export default CrossSection

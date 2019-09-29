import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import Particles from "react-particles-js"

import bgImg from "../images/isometic-underlay2.png"
import fgImg from "../images/isometic-overlay2.png"

const CrossSectionStyled = styled.div`
    overflow: hidden;
    #pinContainer {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        .panel {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            right: 0rem;
            text-align: right;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 1rem 1rem 1rem;
            margin-right: 1rem;
            span {
                color: #fff;
                display: block;
                max-width: 12rem;
            }
        }
    }
    .bg {
        background-image: url(${bgImg});
        background-size: contain;
        background-repeat: no-repeat;
        /* background-position: center; */
        width: 100%;
        height: 100%;
    }
    .fg {
        position: absolute;
        top: 0;
        background-image: url(${fgImg});
        background-size: contain;
        background-repeat: no-repeat;
        /* background-position: center; */
        width: 100%;
        height: 100%;
    }
    .vignette {
        background: radial-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6));
        position: fixed;
        height: 100vh;
        width: 100vw;
        z-index: 2;
        top: 0;
    }
    .particles {
        position: fixed;
        z-index: 3;
        top: 0;
        height: 100vh;
        width: 100vw;
    }
`

const CrossSection = () => (
    <CrossSectionStyled>
        <Controller>
            <Scene triggerHook="onLeave" duration="200%" pin>
                <Timeline wrapper={<div id="pinContainer" />}>
                    <div className=" bg" />

                    <Tween from={{ y: "0%" }} to={{ y: "-50%" }}>
                        <div className=" fg" />
                    </Tween>

                    <Tween from={{ opacity: "0" }} to={{ opacity: "1" }}>
                        <section className="panel intro">
                            <span>
                                This cut away look at a building rocks your
                                socks so it does hear ye hear ye.
                            </span>
                        </section>
                    </Tween>
                </Timeline>
            </Scene>
        </Controller>
        {/* <div className="vignette" /> */}
        {/* <Particles
            className="particles"
            params={{
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: false,
                        },
                    },
                    size: {
                        value: 2,
                        random: true,
                    },
                    move: {
                        direction: "bottom",
                        out_mode: "out",
                    },
                    line_linked: {
                        enable: false,
                    },
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "remove",
                        },
                    },
                    modes: {
                        remove: {
                            particles_nb: 10,
                        },
                    },
                },
            }}
        /> */}
    </CrossSectionStyled>
)

export default CrossSection

import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import Particles from "react-particles-js"

import bgImg from "../images/isometic-underlay2.png"
import fgImg from "../images/isometic-overlay2.png"
import fg2Img from "../images/isometic-gardens2.png"

const CrossSectionStyled = styled.div`
    overflow: hidden;
    /* background-color: #5c5; */
    background-color: #cd7;
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
    .bg,
    .fg,
    .fg2 {
        position: absolute;
        top: 0;
        background-size: contain;
        background-repeat: no-repeat;
        /* background-position: center; */
        width: 100%;
        height: 100%;
    }
    .bg {
        background-image: url(${bgImg});
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
    }
    .fg {
        background-image: url(${fgImg});
    }
    .fg2 {
        background-image: url(${fg2Img});
        z-index: 4;
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
    .progress {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 3;
    }
`

const CrossSection = () => (
    <CrossSectionStyled>
        <Controller>
            <Scene triggerHook="onLeave" duration="200%" pin>
                {/* {progress => (
                    <> */}
                {/* <div className="progress">{progress}</div> */}
                <Timeline wrapper={<div id="pinContainer" />}>
                    <div className="bg" />

                    <div className="fg2" />
                    <Tween from={{ y: "0%" }} to={{ y: "-30%" }}>
                        <div className=" fg" />
                    </Tween>

                    <Tween
                        from={{ x: "50%", y: "-50%", opacity: "0" }}
                        to={{ x: "0%", y: "-50%", opacity: "1" }}
                    >
                        <section className="panel intro">
                            <span>
                                <h3>Heading here</h3>
                                This cut away look at a building rocks your
                                socks so it does hear ye hear ye.
                            </span>
                        </section>
                    </Tween>
                </Timeline>
                {/* </>
                )} */}
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

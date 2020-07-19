import React, { ReactChild } from "react"
import Nav from "../../components/Nav"
import styled from "styled-components"
import nike1 from "../../img/nike-1.jpg"
import nike2 from "../../img/nike-2.jpg"
import nike3 from "../../img/nike-3.jpg"
import rangeify from "../../helpers/rangeify"
// import { useSpring, animated } from "react-spring"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const WorkPage = styled.div`
    background: #000;
    /* height: 100vh; */
    /* .underlay {
        position: fixed;
        z-index: 1;
        top: 0;
        bottom: 0;
        left: calc(100% - 20rem);
        right: 0;
        background: rgba(0, 0, 0, 0.5);
    } */
    .work-images {
        position: fixed;
        width: 100vw;
        height: 100vh;
        /* scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        } */
    }
    .work-image {
        right: -100vw;
        width: 100%;
        height: 100%;
        /* background: blue; */
        opacity: 0.1;
        position: absolute;
        /* border: 10px solid red; */
        /* box-sizing: border-box; */
    }
    .img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: calc(100% - 20rem);
        height: calc(100% - 20rem);
        background-size: cover;
        background-position: top left;
        background-repeat: no-repeat;
    }

    .height-section {
        height: 100vh;
    }
    .cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, black);
        transform-origin: right;
    }
    .spots {
        position: fixed;
        left: 3rem;
        top: 50%;
        transform: translateY(-50%);
    }
    .spot-container {
        width: 1rem;
        height: 1rem;
        border: 1px solid #fff;
        border-radius: 100%;
        margin: 0.5rem 0;
        cursor: pointer;
    }
    .spot {
        background: #fff;
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
    }
    .prev,
    .next {
        border: 1px solid #fff;
        width: 1rem;
        height: 1rem;
        background: transparent;
        transform: rotate(45deg);
        margin-left: 0.075rem;
        cursor: pointer;
        &:focus {
            outline: 0;
        }
    }
    .prev {
        border-right: 0;
        border-bottom: 0;
    }
    .next {
        border-left: 0;
        border-top: 0;
    }
`

const images = [nike1, nike2, nike3]

const Nike = () => {
    const workImages = React.useRef<HTMLDivElement>(null)
    const spots = React.useRef<HTMLDivElement>(null)

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".trigger",
            start: "top 1px", // trg | scrl
            end: "bottom bottom", //trg | scrl
            scrub: true,
            markers: true,
        },
    })

    const getNextPrev = React.useCallback(() => {
        const prog = tl.progress()
        const progSection = prog * (images.length - 1)
        const floored = Math.floor(progSection)
        return {
            prog,
            prev: progSection - floored > 0.1 ? floored : floored - 1,
            next: prog !== 0 ? Math.ceil(progSection) : 1,
        }
    }, [tl])

    React.useEffect(() => {
        const imageEls: Element[] = []
        if (workImages && workImages.current !== null && workImages.current) {
            imageEls.push(...workImages.current.querySelectorAll(".work-image"))
        }
        const spotEls: Element[] = []
        if (spots && spots.current !== null && workImages.current) {
            spotEls.push(...spots.current.querySelectorAll(".spot"))
        }

        imageEls.forEach((img, i) => {
            // setup
            const spot = spotEls[i]
            i === 0
                ? tl.set(img, { scale: 1, opacity: 1, x: "-100%" }, 0)
                : tl.set(spot, { css: { opacity: 0 } }, 0)
            // animate in
            if (i !== 0) {
                tl.to(
                    img,
                    { opacity: 1, duration: 1, x: "-100%", ease: "none" },
                    i - 1
                )
                tl.to(spot, { duration: 1, css: { opacity: 1 } }, i - 1)
            }
            // animate out
            if (i !== images.length - 1) {
                tl.to(
                    img,
                    { opacity: 0, duration: 1, x: "-200%", ease: "none" },
                    i
                )
                tl.to(spot, { duration: 1, css: { opacity: 0 } }, i)
            }
        })
        console.log(tl.duration())
        return () => {}
    }, [tl, workImages])

    const scrollToSection = React.useCallback((destination: number) => {
        const html = document.querySelector("html")
        if (html) {
            html.scrollTo({
                left: 0,
                top: (html.offsetHeight / images.length) * destination,
                behavior: "smooth",
            })
        }
    }, [])

    return (
        <WorkPage>
            <Nav />
            <div>NIKE</div>
            <div ref={workImages} className="work-images">
                {images.map((img, i) => {
                    return (
                        <div key={i} className="work-image">
                            <span
                                className="img"
                                style={{ backgroundImage: `url(${img})` }}
                            />
                        </div>
                    )
                })}
            </div>
            <div ref={spots} className="spots">
                <button
                    className="prev"
                    onClick={(e) => scrollToSection(getNextPrev()["prev"])}
                />
                {images.map((img, i) => {
                    return (
                        <div
                            key={i}
                            className="spot-container"
                            onClick={() => scrollToSection(i)}
                        >
                            <div className="spot" />
                        </div>
                    )
                })}
                <button
                    className="next"
                    onClick={(e) => scrollToSection(getNextPrev()["next"])}
                />
            </div>
            <div
                className="trigger"
                style={{ height: images.length * 100 + "vh" }}
            />
        </WorkPage>
    )
}

export default Nike

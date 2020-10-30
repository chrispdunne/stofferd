import React from "react"
import Nav from "./Nav"
import styled from "styled-components"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type WorkImg = {
    src: string
    caption?: string
}

type Props = {
    images: WorkImg[]
    subtitle: string
    title: string
}

const WorkPage = styled.div`
    background: #000;
    .title {
        position: fixed;
        color: #fff;
        h1,
        h3 {
            margin: 0.5rem 0;
        }
    }
    .subtitle {
        white-space: pre-wrap;
    }
    /* 980px + big */
    @media only screen and (min-width: 61.25em) {
        .title {
            top: 2.5em;
            left: 9.7rem;
        }
        .subtitle {
            max-width: calc(100% - 20rem);
        }
    }

    /* < 979px small */
    @media only screen and (max-width: 61.1875em) {
        .title {
            top: 4em;
            padding: 0;
            width: 100%;
            height: calc(50vh - 4rem);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            h1 {
                font-size: 1.5rem;
                text-align: center;
                width: 100%;
                margin-top: 2rem;
            }
        }
        .subtitle {
            padding: 0 3rem;
            width: calc(100% - 6rem);
        }
    }

    .work-images {
        position: fixed;
        width: 100vw;
        height: 100vh;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .work-image {
        right: -100vw;
        width: 100%;
        height: 100%;
        opacity: 0.1;
        position: absolute;
    }
    .work-container {
        position: absolute;
        top: 50%;
        max-width: calc(100% - 48rem);
        max-height: calc(100vh - 30rem);
        background-size: cover;
        background-position: top left;
        background-repeat: no-repeat;
    }
    .img {
        max-width: 95vw;
        max-height: 50vh;
    }
    /* 980px + */
    @media only screen and (min-width: 61.25em) {
        .work-container {
            left: 10rem;
            transform: translateY(-50%);
        }
        .img {
            max-width: 95vw;
            max-height: 50vh;
        }
    }

    /* < 979px */
    @media only screen and (max-width: 61.1875em) {
        .work-container {
            left: 3rem;
        }
        .img {
            max-width: calc(100vw - 6rem);
            max-height: calc(50vh - 7rem);
        }
    }

    .caption {
        color: #000;
        top: 50%;
        width: auto;
        text-transform: capitalize;
        background: #fff;
        padding: 10px 20px;
        margin: 40px 0 0;
        font-size: 0.9rem;
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        &:before {
            content: "";
            display: block;
            width: 5px;
            height: 5px;
            position: absolute;
            top: -10px;
            left: -11px;
            border: 11px solid #fff;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-top-color: transparent;
            transform: rotate(135deg);
            box-sizing: border-box;
        }
    }

    /* < 979px */
    @media only screen and (max-width: 61.1875em) {
        .caption {
            max-width: calc(100vw - 6rem);
            min-width: 12rem;
        }
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
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
    }
    /* 980px + */
    @media only screen and (min-width: 61.25em) {
        .spots {
            left: 3rem;
        }
    }

    /* < 979px */
    @media only screen and (max-width: 61.1875em) {
        .spots {
            left: 1rem;
        }
    }
    .spot-container {
        width: 12px;
        height: 12px;
        border: 1px solid #fff;
        border-radius: 100%;
        margin: 8px 0;
        cursor: pointer;
    }
    .spot {
        background: #fff;
        width: 13px;
        height: 13px;
        border-radius: 100%;
    }
    .prev,
    .next {
        border: 1px solid #fff;
        width: 9px;
        height: 9px;
        background: transparent;
        transform: rotate(45deg);
        padding: 0;
        margin-left: 2.5px;
        cursor: pointer;
        &:focus {
            outline: 0;
        }
    }
    .prev {
        border-right: 0;
        border-bottom: 0;
        margin-bottom: 6px;
    }
    .next {
        border-left: 0;
        border-top: 0;
    }
`

const Work = ({ images, subtitle, title }: Props) => {
    const workImages = React.useRef<HTMLDivElement>(null)
    const spots = React.useRef<HTMLDivElement>(null)
    const [tl, setTl] = React.useState<any>(null)
    React.useEffect(() => {
        setTl(
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".trigger",
                    start: "0px 1px", // trg | scrl
                    end: "bottom bottom", //trg | scrl
                    scrub: true,
                },
            })
        )
    }, [])

    const getNextPrev = React.useCallback(() => {
        if (!tl) return { prog: 0, prev: 0, next: 0 }
        const prog = tl.progress()
        const progSection = prog * (images.length - 1)
        const floored = Math.floor(progSection)
        return {
            prog,
            prev: progSection - floored > 0.1 ? floored : floored - 1,
            next: prog !== 0 ? Math.ceil(progSection) : 1,
        }
    }, [images, tl])

    React.useEffect(() => {
        if (!tl) return

        const imageEls: Element[] =
            workImages && workImages.current
                ? [...workImages.current.querySelectorAll(".work-image")]
                : []

        const spotEls: Element[] =
            spots && spots.current !== null && workImages.current
                ? [...spots.current.querySelectorAll(".spot")]
                : []

        imageEls.forEach((img, i) => {
            // setup
            const spot = spotEls[i]
            if (i === 0) {
                tl.set(img, { opacity: 1, x: "-100%" }, 0)
            } else {
                tl.set(spot, { css: { opacity: 0 } }, 0)
            }

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
        tl.scrollTrigger.refresh()
        return () => {}
    }, [tl, images, workImages])

    const scrollToSection = React.useCallback(
        (destination: number) => {
            if (!destination && destination !== 0) return
            const html = document.querySelector("html")
            if (html) {
                html.scrollTo({
                    left: 0,
                    top: (html.offsetHeight / images.length) * destination,
                    behavior: "smooth",
                })
            }
        },
        [images]
    )

    return (
        <WorkPage>
            <Nav fixed={true} />
            <div className="title">
                <h1>{title}</h1>
                <p className="subtitle">{subtitle}</p>
            </div>
            <div ref={workImages} className="work-images">
                {images.map((img, i) => {
                    return (
                        <div key={i} className="work-image">
                            <div className="work-container">
                                <img
                                    className="img"
                                    src={img.src}
                                    alt="work screenshot"
                                />
                                <div className="caption">{img.caption}</div>
                            </div>
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

export default Work

import React from "react"
import Nav from "./Nav"
import styled from "styled-components"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Props = {
    images: string[]
    subtitle: string
    title: string
}

const WorkPage = styled.div`
    background: #000;
    .title {
        position: fixed;
        top: 2.5em;
        left: 9.7rem;
        color: #fff;
        h1,
        h3 {
            margin: 0.5rem 0;
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
    .img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10rem;
        width: calc(100% - 30rem);
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
                    // markers: true,
                },
            })
        )
    }, [])
    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".trigger",
    //         start: "0px 1px", // trg | scrl
    //         end: "bottom bottom", //trg | scrl
    //         scrub: true,
    //         // markers: true,
    //     },
    // })

    const getNextPrev = React.useCallback(() => {
        if (!tl) return
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
            if (i === 0) {
                tl.set(img, { scale: 1, opacity: 1, x: "-100%" }, 0)
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
            <div className="title">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
            </div>
            <div ref={workImages} className="work-images">
                {images.map((img, i) => {
                    return (
                        <div key={i} className="work-image">
                            <img
                                className="img"
                                src={img}
                                alt="work screenshot"
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

export default Work

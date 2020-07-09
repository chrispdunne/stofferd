import React from "react"
import Nav from "../../components/Nav"
import styled from "styled-components"
import nike1 from "../../img/nike-1.jpg"
import nike2 from "../../img/nike-2.jpg"
import nike3 from "../../img/nike-3.jpg"
import rangeify from "../../helpers/rangeify"
import { useSpring, animated } from "react-spring"

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
        display: flex;
        position: fixed;
        z-index: 0;
        top: 50%;
        left: 20%;
        transform: translateY(-50%) translateZ(0);
        width: 60%;

        display: flex;
        flex-wrap: nowrap;
        /* overflow-y: scroll; */
        /* scroll-snap-type: x mandatory;
        scroll-snap-type: mandatory;
        -ms-scroll-snap-type: mandatory;
        -webkit-scroll-snap-type: mandatory;
        -webkit-scroll-snap-destination: 0% 0%;
        -webkit-overflow-scrolling: touch; */
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .work-image {
        background-size: contain;
        background-repeat: no-repeat;
        flex: 0 0 100%;
        /* scroll-snap-align: start; */
        overflow: visible;
        scroll-snap-align: start;
        scroll-snap-coordinate: 0% 0%;
        -webkit-scroll-snap-coordinate: 0% 0%;
        position: relative;
        &:before {
            content: "";
            padding-top: 57%;
            display: block;
        }

        &:last-child {
            /* padding-right: 16vw; */
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
`

const images = [nike1, nike2, nike3]

const Nike = () => {
    const workImages = React.useRef(null)
    const heightRef = React.useRef(null)

    const [props, setSpring] = useSpring(() => ({
        config: {
            mass: 1,
            tension: 100,
            friction: 15,
        },
        transform: "translateX(-0%) translateY(-50%) translateZ(0)",
    }))

    const onScroll = React.useCallback(
        (e) => {
            requestAnimationFrame(() => {
                if (!window || !workImages || !workImages.current) return
                const el = workImages.current
                const currentSection = Math.floor(
                    window.scrollY / window.innerHeight
                )

                const progress =
                    (window.scrollY / window.innerHeight) *
                    ((images.length - 1) / images.length)
                setSpring({
                    transform:
                        "translateX(-" +
                        progress * 100 +
                        "%) translateY(-50%) translateZ(0)",
                })
                // el.style.transform =
                //     "translateX(-" +
                //     progress * 100 +
                //     "%) translateY(-50%) translateZ(0)"
            })
        },
        [setSpring, workImages]
    )

    React.useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [onScroll])

    return (
        <WorkPage>
            <Nav />
            {/* <div className="underlay" /> */}
            <div>NIKE</div>
            <animated.div
                style={props}
                ref={workImages}
                className="work-images"
            >
                {images.map((img, i) => {
                    return (
                        <div
                            key={i}
                            className="work-image"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    )
                })}
            </animated.div>
            <div ref={heightRef} className="height">
                {[...Array(images.length)].map((e, i) => {
                    return <div key={i} className="height-section" />
                })}
            </div>
        </WorkPage>
    )
}

export default Nike

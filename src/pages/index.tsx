import React from "react"
import styled from "styled-components"
import HomeSection from "../components/HomeSection"
import nike from "../img/nike.png"
import ey from "../img/ey.png"
import firm from "../img/firm.png"
import Loadable from "react-loadable"
import Nav from "../components/Nav"
import placeholder from "../img/placeholder-eye-1.jpg"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import favicon from "../img/favicon.png"
import Spacer from "../components/Spacer"
import Login from "../components/Login"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Chevron = styled.div`
    position: absolute;
    bottom: 5vh;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 1.5rem;
    height: 1.5rem;
    border: 3px solid #fff;
    border-top-color: transparent;
    border-left-color: transparent;
    cursor: pointer;
`

const LoadingDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000;
    /* color: #fff; */
    text-align: center;

    .placeholder {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        background: #000;
        /* padding: 0.5rem 0.8rem; */
        text-transform: uppercase;
        font-weight: bold;
        display: block;
        background-image: url(${placeholder});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 12rem 12rem;
        width: 15rem;
        height: 15rem;
    }
    .loading-text {
        top: 50%;
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
        background: #000;
        padding: 0.5rem 1rem;
    }

    .border {
        position: absolute;
        left: calc(50% - 7.5rem);
        top: calc(50% - 7.5rem);
        border: 2px solid #fff;
        border-left: 1px solid transparent;
        border-radius: 100%;
        width: 15rem;
        height: 15rem;
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-duration: 1.5s;
        animation-timing-function: linear;
    }
    @media only screen and (max-width: 61.1875em) {
        background-position: center 33%;
        background-size: 12rem 12rem;

        .placeholder {
            top: 33%;
            background-size: 9rem 9rem;
        }
        .border {
            top: calc(33% - 6rem);
            left: calc(50% - 6rem);
            width: 12rem;
            height: 12rem;
        }
        div {
            width: 12rem;
            height: 12rem;
            top: calc(33% - 4.5rem);
            left: calc(50% - 4.5rem);
        }
    }
`

// a component that will be defered to be rendered only on client side.
const loader = () => (
    <LoadingDiv>
        <div className="placeholder">
            <span className="loading-text">LOADING</span>
        </div>
        <div className="border" />
    </LoadingDiv>
)
const LoadableEye = Loadable({
    loader: () => import("../components/Eye"), // imports the component with the three.js and allows use of it safely
    loading: loader,
})

const Container = styled.section`
    height: 100vh;
    scroll-snap-align: start;
    position: relative;
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
    z-index: 2;
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

const SectionContainer = styled.div`
    height: 100vh;
    /* 980px */
    @media only screen and (min-width: 61.25em) {
        /* scroll-snap-type: y mandatory;
        overflow-y: scroll; */
    }
`

const Home = () => {
    const [loggedIn, _setLoggedIn] = React.useState(false)
    const setLoggedIn = React.useCallback(() => {
        _setLoggedIn(true)
        window.localStorage.setItem("loggedin", "true")
    }, [_setLoggedIn])
    React.useEffect(() => {
        if (window.localStorage.getItem("loggedin")) setLoggedIn()
    }, [setLoggedIn])

    const [tl, setTl] = React.useState<any>(null)
    React.useEffect(() => {
        setTl(
            gsap.timeline({
                scrollTrigger: {
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            })
        )
    }, [])

    if (tl) {
        const nav: HTMLDivElement | null = document.querySelector(".nav.main")
        const navTop = nav ? nav.offsetTop - nav.offsetHeight / 2 : 0
        const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
            ".nav-link a"
        )
        const sections = document.querySelectorAll(".home-section")

        navLinks.forEach((link: HTMLAnchorElement) => {
            const linkHeight = link ? link.offsetHeight : 0
            const linkBottom = link ? link.offsetTop + link.offsetHeight / 2 : 0
            const linkTop = link ? link.offsetTop - link.offsetHeight / 2 : 0
            sections.forEach((section, i) => {
                //@TODO REFACTOR  - repeating above
                tl.fromTo(
                    link,
                    { color: i % 2 ? "#000" : "#fff" },
                    {
                        scrollTrigger: {
                            scrub: true,
                            invalidateOnRefresh: true,
                            trigger: section,
                            pinReparent: true,
                            // if you set first param to 0 it still adds the top offset of nav
                            start: "top bottom",
                            // () =>
                            //     i * window.innerHeight +
                            //     window.innerHeight -
                            //     window.scrollY -
                            //     navTop -
                            //     linkTop -
                            //     linkHeight / 2 +
                            //     " " +
                            //     (linkBottom + navTop + linkHeight / 2 - 10), // trg | scrl
                            end: "bottom bottom",
                            // () =>
                            //     i * window.innerHeight +
                            //     window.innerHeight -
                            //     window.scrollY -
                            //     navTop -
                            //     linkTop -
                            //     linkHeight / 2 +
                            //     " " +
                            //     (linkTop + navTop + linkHeight / 2 + 10), //trg | scrl

                            // scrub: true,
                            // markers: true,
                        },
                        color: i % 2 ? "#fff" : "#000",
                    }
                )
            })
        })
    }
    const clickToScroll = React.useCallback(()=>{
        if(!window) return
        window.scrollTo({
            left: 0,
            top: window.innerHeight,
            behavior: 'smooth'
        });
    },[]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Stoffer D - React, WordPress, TypeScript Developer
                </title>
                <link rel="canonical" href="https://stofferd.com" />
                <link
                    id="fav"
                    rel="shortcut icon"
                    type="image/png"
                    href={favicon}
                />
            </Helmet>
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Nav />
            <SectionContainer>
                <Container>
                    <Caption>
                        <h3>REACT, WORDPRESS, TYPESCRIPT</h3>
                        <h1>DEVELOPER</h1>
                        <Link to="/about">
                            <button className="btn">FIND OUT MORE</button>
                        </Link>
                    </Caption>
                    <LoadableEye />
                    <Chevron onClick={clickToScroll} />
                </Container>

                <HomeSection
                    className="home-section"
                    btnLink="work/nike"
                    title="Nike"
                    subtitle="React, WordPress"
                    img={<img className="client-logo" src={nike} alt="Nike" />}
                />

                <HomeSection
                    className="home-section"
                    btnLink="/work/ey"
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

                <HomeSection
                    className="home-section"
                    btnLink="/work/firm"
                    title="The Firm"
                    subtitle="React, WordPress"
                    img={<img className="client-logo" src={firm} alt="Nike" />}
                />

                <Spacer />
            </SectionContainer>
        </>
    )
}

export default Home

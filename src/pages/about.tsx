import React from "react"
import Nav from "../components/Nav"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import favicon from "../img/favicon.png"
import TimelineSection from "../components/TimelineSection"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { TimelineProps } from "../components/TimelineSection"
import Login from "../components/Login"

gsap.registerPlugin(ScrollTrigger)

const AboutPage = styled.main`
    background: #000;
    color: #fff;
    h1 {
        position: absolute;
        top: 2.5rem;
        left: 0;
        padding-left: 3rem;
        margin: 0;
    }
    .timeline {
        margin-left: 3rem;
        padding-top: 6rem;
        padding-top: 33vh;
        position: relative;
        &:before {
            content: "";
            border-left: 1px solid #fff;
            display: block;
            position: absolute;
            top: 10rem;
            bottom: 0;
            width: 1px;
        }
    }
    // small
    @media only screen and (max-width: 61.1875em) {
        h1 {
            width: 100vw;
            left: 1.9rem;
            margin: 0;
            padding: 0;
            font-size: 1.5rem;
            top: 6rem;
        }
        .timeline {
            margin-left: 2rem;
        }
    }
    // large
    @media only screen and (min-width: 61.25em) {
        .timeline {
            margin-left: 50px;
        }
    }
`

const sections: TimelineProps[] = [
    {
        date: "2017 to date",
        where: "Loopmill",
        callout: "Co-Founder, Lead Front-end developer",
        desc:
            "React, TypeScript, GraphQL, NextJS, WordPress, WP API, GatsbyJS development in addition to account management for a range of clients including Nike, Bupa, London Sport and Ernst & Young.",
    },
    {
        date: "2014 - 2017",
        where: "Pragmatic",
        callout: "Senior WordPress Developer",
        desc:
            "Range of PHP, WP REST API and JS development for clients including ITV, Bacardi.",
    },
    {
        date: "2011 - 2014",
        where: "LoyLogic",
        callout: "Web Designer",
        desc:
            "Building microsites & HTML newsletters for various loyalty programmes including Hilton, Etihad and Scandinavian Airlines.",
    },
    {
        date: "2010 - 2011",
        where: "Siemens / CD-Adapco",
        callout: "Web Designer",
        desc:
            "Microsite design & build for range of Siemens / CD-Adapco products.",
    },
    {
        date: "2005 - 2009",
        where: "Brunel University, London",
        desc: "BSC Multimedia Design & Technology With 1 year work placement.",
        callout: "1st Class Honours",
    },
]

const About = () => {
    const timeline = React.useRef<HTMLDivElement>(null)

    const [tl, setTl] = React.useState<any>(null)
    React.useEffect(() => {
        setTl(
            gsap.timeline({
                scrollTrigger: {
                    scrub: true,
                    invalidateOnRefresh: true,
                    // markers: true,
                },
            })
        )
    }, [])

    React.useEffect(() => {
        if (!tl) return

        const sectionEls: Element[] =
            timeline && timeline.current
                ? [...timeline.current.querySelectorAll(".timeline-section")]
                : []

        sectionEls.forEach((section, i) => {
            if (i === 0) return
            const circle1 = section.querySelector(".circle1")
            const circle2 = section.querySelector(".circle2")
            const line = section.querySelector(".line")
            const text = section.querySelector(".text")

            // tl.set(section, { autoAlpha: 0.5 })
            tl.set(circle1, { scale: 0 }, 0)
            tl.set(line, { scaleX: 0 }, 0)
            tl.set(circle2, { scale: 0 }, 0)
            tl.set(text, { autoAlpha: 0 }, 0)

            // grow circle
            tl.fromTo(
                circle1,
                { scale: 0 },
                {
                    scale: 1,
                }
            )
            // grow line
            tl.fromTo(
                line,
                { scaleX: 0 },
                {
                    scaleX: 1,
                }
            )
            // grow circle 2
            tl.fromTo(
                circle2,
                { scale: 0 },
                {
                    scale: 1,
                }
            )
            // fade text in
            tl.fromTo(
                text,
                { autoAlpha: 0 },
                {
                    duration: 1,
                    autoAlpha: 1,
                }
            )
        })
        tl.scrollTrigger.refresh()
        return () => {}
    }, [tl, timeline])

    const [loggedIn, _setLoggedIn] = React.useState(false)
    const setLoggedIn = React.useCallback(() => {
        _setLoggedIn(true)
        window.localStorage.setItem("loggedin", "true")
    }, [_setLoggedIn])
    React.useEffect(() => {
        if (window.localStorage.getItem("loggedin")) setLoggedIn()
    }, [setLoggedIn])

    return (
        <>
            {!loggedIn ? (
                <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            ) : (
                <>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>
                            About Stoffer D - React, WordPress, TypeScript
                            Developer
                        </title>
                        <link rel="canonical" href="https://stofferd.com" />
                        <link
                            rel="shortcut icon"
                            type="image/png"
                            href={favicon}
                        />
                    </Helmet>

                    <Nav white />

                    <AboutPage>
                        <h1>About Stoffer</h1>
                        <div className="timeline" ref={timeline}>
                            {sections.map((section, i) => {
                                return (
                                    <TimelineSection
                                        key={i}
                                        className="timeline-section"
                                        date={section.date}
                                        where={section.where}
                                        desc={section.desc}
                                        callout={
                                            section.callout
                                                ? section.callout
                                                : undefined
                                        }
                                    />
                                )
                            })}
                        </div>
                    </AboutPage>
                </>
            )}
        </>
    )
}

export default About

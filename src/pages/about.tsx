import React from "react"
import Nav from "../components/Nav"
import styled from "styled-components"

const AboutPage = styled.main`
    background: #000;
    min-height: 100vh;
    color: #fff;
`

const About = () => {
    return (
        <AboutPage>
            ABOUT
            <Nav />
        </AboutPage>
    )
}

export default About

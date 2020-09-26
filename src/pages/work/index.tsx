import React from "react"
import Nav from "../../components/Nav"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import favicon from "../../img/favicon.png"

const WorkPage = styled.main`
    background: #000;
    min-height: 100vh;
    color: #fff;
`

const Work = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Stoffer D - React, WordPress, TypeScript Developer
                </title>
                <link rel="canonical" href="https://stofferd.com" />
                <link rel="shortcut icon" type="image/png" href={favicon} />
            </Helmet>
            <WorkPage>
                Woork
                <Nav />
            </WorkPage>
        </>
    )
}

export default Work

import React from "react"
import Nav from "../../components/Nav"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import favicon from "../../img/favicon.png"
import nike from "../../img/nike-white.png"
import ey from "../../img/ey.png"
import firm from "../../img/firm-white.png"
import { Link } from "gatsby"
import Login from '../../components/Login';

const WorkPage = styled.main`
    background: #000;
    min-height: 100vh;
    color: #fff;
    h1 {
        margin: 0;
        padding: 2rem 3rem;
        position: absolute;
    }
    /* 979px small */
    @media only screen and (max-width: 61.1875em) {
        h1 {
            top: 8rem;
            text-align: center;
            width: 100%;
            padding: 0;
        }
    }
    .work-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: calc(100% - 10rem);
        z-index: 1;
        position: relative;
    }
    .work-item {
        width: 8rem;
        height: 8rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        margin: 1rem;
    }
`

const Work = () => {
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Stoffer D - React, WordPress, TypeScript Developer
                </title>
                <link rel="canonical" href="https://stofferd.com" />
                <link rel="shortcut icon" type="image/png" href={favicon} />
            </Helmet>
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <WorkPage>
                <Nav />
                <h1>Work</h1>
                <div className="work-container">
                    <Link to="/work/nike">
                        <div
                            className="work-item"
                            style={{ backgroundImage: "url(" + nike + ")" }}
                        />
                    </Link>

                    <Link to="/work/ey">
                        <div
                            className="work-item"
                            style={{ backgroundImage: "url(" + ey + ")" }}
                        />
                    </Link>

                    <Link to="/work/firm">
                        <div
                            className="work-item"
                            style={{ backgroundImage: "url(" + firm + ")" }}
                        />
                    </Link>
                </div>
            </WorkPage>
        </>
    )
}

export default Work

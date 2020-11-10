import React from "react"
import Nav from "../components/Nav"
import ContactForm from "../components/ContactForm"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import favicon from "../img/favicon.png"
import Login from "../components/Login"

const ContactPage = styled.main`
    background: #000;
    min-height: 100vh;
    color: #fff;
    h1 {
        text-align: center;
        margin: 0;
    }
    @media only screen and (max-width: 61.1875em) {
        h1 {
            padding-top: 8rem;
        }
        form {
            padding-bottom: 5rem;
        }
    }
    @media only screen and (min-width: 61.25em) {
        h1 {
            padding-top: 10rem;
        }
        form {
            margin-top: 5rem;
        }
    }
`

const Contact = () => {
    // const [loggedIn, _setLoggedIn] = React.useState(false)
    // const setLoggedIn = React.useCallback(() => {
    //     _setLoggedIn(true)
    //     window.localStorage.setItem("loggedin", "true")
    // }, [_setLoggedIn])
    // React.useEffect(() => {
    //     if (window.localStorage.getItem("loggedin")) setLoggedIn()
    // }, [setLoggedIn])

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
            <Nav white />

            <ContactPage>
                {/* <Login loggedIn=/{loggedIn} setLoggedIn={setLoggedIn} /> */}

                <h1>Contact</h1>
                <ContactForm />
            </ContactPage>
        </>
    )
}

export default Contact

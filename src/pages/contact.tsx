import React from "react"
import Nav from "../components/Nav"
import ContactForm from "../components/ContactForm"
import styled from "styled-components"

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
    return (
        <ContactPage>
            <Nav />
            <h1>Contact</h1>
            <ContactForm />
        </ContactPage>
    )
}

export default Contact

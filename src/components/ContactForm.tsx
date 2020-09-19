import React from "react"
import styled from "styled-components"
import axios from "axios"
import * as qs from "query-string"

const Status = styled.div`
    text-align: center;
`

const Form = styled.form`
    label {
        display: block;
        font-size: 0.8rem;
        text-transform: uppercase;
        margin: 2rem auto 3rem;
        font-weight: bold;
        width: 20rem;
        text-align: left;
        span {
            width: 3rem;
            display: block;
        }
        input,
        textarea {
            margin: 0;
            font-family: "g", sans-serif;
            font-size: 1.5rem;
            background: transparent;
            border: 0;
            border-bottom: 1px solid #fff;
            color: #fff;
            position: relative;
            top: -0.3rem;
            padding: 0.75rem 0;
            &:focus {
                outline: 0;
            }
        }
        textarea {
            height: 10rem;
        }
    }
    button {
        display: block;
        margin: auto;
    }
    .phone {
        display: none;
    }
    @media only screen and (max-width: 61.1875em) {
        form {
            width: 20rem;
            margin: auto;
        }
    }
`

const ContactForm = () => {
    const [formValues, setFormValues] = React.useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    })
    const [status, setStatus] = React.useState("")
    const handleChange = React.useCallback(
        (e) => {
            e.preventDefault()
            setFormValues({ ...formValues, [e.target.name]: e.target.value })
        },
        [formValues, setFormValues]
    )
    const handleSubmit = React.useCallback(
        (e) => {
            e.preventDefault()
            if (formValues.phone) return
            const axiosOptions: any = {
                url: window.location.pathname,
                method: "post",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                data: qs.stringify(formValues) + "&form-name=contact",
            }
            axios(axiosOptions)
                .then((response) => {
                    setStatus("message sent")
                    console.log({ response })
                })
                .catch((error) => {
                    setStatus("Error: Form not sent. Please try again")
                    console.log({ error })
                })
        },
        [formValues]
    )
    return (
        <>
            {status ? (
                <Status>{status}</Status>
            ) : (
                <Form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <label>
                        <span>Name:</span>
                        <input
                            name="name"
                            value={formValues.name}
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                    <label>
                        <span>Email:</span>
                        <input
                            name="email"
                            value={formValues.email}
                            onChange={(e) => handleChange(e)}
                            type="email"
                        />
                    </label>
                    <label className="phone">
                        <span>Phone:</span>
                        <input
                            name="phone"
                            value={formValues.phone}
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                    <label>
                        <span>Message:</span>
                        <textarea
                            name="message"
                            value={formValues.message}
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                    <button type="submit" className="btn">
                        Send message
                    </button>
                </Form>
            )}
        </>
    )
}

export default ContactForm

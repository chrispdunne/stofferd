import React from "react"
import styled from "styled-components"

type Props = {
    loggedIn: boolean
    setLoggedIn: () => void
}

const LoginBox = styled.div`
    position: fixed;
    z-index: 50;
    background: #000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    label {
        color: #fff;
        display: block;
        padding: 1rem 0 1rem;
        font-size: 1.5rem;
        text-align: center;
    }
    input {
        background: #000;
        font-size: 2rem;
        color: #fff;
        outline: 0;
        border: 0;
        border-bottom: 1px solid #fff;
        max-width: 90vw;
    }
`

const Login = ({ loggedIn = false, setLoggedIn }: Props) => {
    const [typed, setTyped] = React.useState("")
    const handleChange = React.useCallback(
        (e) => {
            const typedVal = e.target.value.toLowerCase()
            setTyped(typedVal)

            // if (
            //     process.env.GATSBY_PASSWORDS &&
            //     process.env.GATSBY_PASSWORDS.split(" ").includes(
            //         e.target.value.toLowerCase()
            //     )
            // ) {
            // setLoggedIn()
            // }

            if (window) {
                ;(async () => {
                    const formData = new FormData()
                    formData.append("typed", typedVal)
                    const res = await window.fetch(
                        "/.netlify/functions/entry",
                        { method: "POST", body: formData }
                    )
                    console.log({ res })
                })()
            }
        },
        [setLoggedIn, setTyped]
    )
    return loggedIn === true ||
        process.env.GATSBY_PASSWORD_PROTECTED !== "true" ? null : (
        <LoginBox>
            <div className="container">
                <label htmlFor="password">Password</label>
                <input id="password" value={typed} onChange={handleChange} />
            </div>
        </LoginBox>
    )
}

export default Login

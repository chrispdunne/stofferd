import React from "react"
import Nav from "../components/Nav.tsx"
import styled from "styled-components"
import Login from "../components/Login"

const FourOhFour = styled.div`
    width: 100%;
    height: 100vh;
    background: #000;
    .msg {
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
`
const NotFound = () => {
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
                <FourOhFour>
                    <Nav />
                    <div className="msg">Page not found</div>
                </FourOhFour>
            )}
        </>
    )
}

export default NotFound

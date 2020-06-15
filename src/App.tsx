import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from "styled-components"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Logo from "./Logo"

const Nav = styled.div`
    /* position: fixed;
    right: 0;
    z-index: 1; */
    /* display: flex; */
    /* flex-direction: column; */
    /* height: 100vh; */
    ul {
        position: fixed;
        z-index: 1;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    li {
        list-style-type: none;
        text-align: right;
    }
    a {
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 20px;
        padding: 1rem 3rem;
        display: inline-block;
    }
    .logo {
        /* flex: 0 0 calc(50% - 8rem); */
        /* text-align: right; */
        /* padding-top: 3rem; */
        position: fixed;
        z-index: 1;
        right: 0;
        top: 2rem;
    }
    .logo__img {
        max-width: 6rem;
    }
    .reverse {
        .logo,
        ul {
            left: 0;
            right: initial;
        }
        ul {
            padding: 0;
        }
        li {
            text-align: left;
        }
        a {
            color: #000;
        }
    }
`

function App() {
    const navRef = React.useRef(null)
    return (
        <Router>
            <div>
                <Nav ref={navRef} id="nav">
                    <Link to="/" className="logo">
                        <Logo />
                    </Link>
                    <ul>
                        <li id="about">
                            <Link to="/about">About</Link>
                        </li>

                        <li id="contact">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="reverse" id="nav">
                        <Link to="/" className="logo">
                            <Logo background="#000" />
                        </Link>
                        <ul>
                            <li id="about">
                                <Link to="/about">About</Link>
                            </li>

                            <li id="contact">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </Nav>

                <Switch>
                    <Route exact path="/">
                        <Home navRef={navRef} />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App

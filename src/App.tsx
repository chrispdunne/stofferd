import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from "styled-components"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import logoUrl from "./img/logo.png"

const Nav = styled.div`
    position: fixed;
    right: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    ul {
    }
    li {
        list-style-type: none;
        text-align: right;
        padding: 1rem 1rem;
    }
    a {
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 20px;
    }
    .logo {
        flex: 0 0 calc(50% - 4rem);
    }
    .logo__img {
        max-width: 6rem;
    }
`

function App() {
    return (
        <Router>
            <div>
                <Nav>
                    <Link to="/" className="logo">
                        <img className="logo__img" src={logoUrl} />
                    </Link>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </Nav>

                <Switch>
                    <Route exact path="/">
                        <Home />
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

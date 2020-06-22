import React from "react"
import styled from "styled-components"
import classNames from "classnames"

type Props = {
    className?: string
    mobNavVis: boolean
    setMobNavVis: (mnv: boolean) => void
}

const Toggl = styled.button`
    width: 6.5rem;
    appearance: none;
    background: transparent;
    /* position: absolute; */
    z-index: 3;
    left: 2rem;
    top: 2rem;
    border: 0;
    cursor: pointer;
    padding: 0 2rem;
    &:focus {
        outline: 0;
    }
    div {
        height: 0.35rem;
        margin-bottom: 0.35rem;
        &:last-child {
            margin: 0;
        }
    }
`

const Toggle = ({ className = "", mobNavVis, setMobNavVis }: Props) => {
    const onClick = React.useCallback(() => {
        setMobNavVis(!mobNavVis)
    }, [mobNavVis, setMobNavVis])
    return (
        <Toggl className={classNames("mobile", className)} onClick={onClick}>
            <div style={{ background: "#fff" }} />
            <div style={{ background: "#fff" }} />
            <div style={{ background: "#fff" }} />
        </Toggl>
    )
}

export default Toggle

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
    z-index: 5;
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
        transition: all 0.3s ease-in-out;
        &:last-child {
            margin: 0;
        }
    }
    &.mobNavVis {
        .piece1 {
            transform: rotate(45deg);
            top: 0.7rem;
            position: relative;
        }
        .piece2 {
            transform: scaleX(0);
        }
        .piece3 {
            transform: rotate(-45deg);
            top: -0.7rem;
            position: relative;
        }
    }
`

const Toggle = ({ className = "", mobNavVis, setMobNavVis }: Props) => {
    const onClick = React.useCallback(() => {
        setMobNavVis(!mobNavVis)
    }, [mobNavVis, setMobNavVis])
    return (
        <Toggl
            className={classNames("mobile", className, { mobNavVis })}
            onClick={onClick}
        >
            <div className="piece1" style={{ background: "#fff" }} />
            <div className="piece2" style={{ background: "#fff" }} />
            <div className="piece3" style={{ background: "#fff" }} />
        </Toggl>
    )
}

export default Toggle

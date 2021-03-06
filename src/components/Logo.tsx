import React from "react"
import styled from "styled-components"

const Grid = styled.div`
    /* display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 1fr); */
    width: 7rem;
    margin: 0;
    padding: 0;
    line-height: 0.7;
    transition: all 0.2s ease-out;
    div {
        margin: 0;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        transition: all 0.2s ease-in-out;
        box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 1);
        background: #f7f7f7;
        &:nth-child(8n + 1) {
            transition-delay: 0.05s;
        }
        &:nth-child(8n + 3) {
            transition-delay: 0.075s;
        }
        &:nth-child(8n + 2) {
            transition-delay: 0.1s;
        }
        &:nth-child(8n + 4) {
            transition-delay: 0.15s;
        }
        &:nth-child(8n + 6) {
            transition-delay: 0.175s;
        }
    }
    .empty {
        opacity: 0;
    }
   
    /* 979px */
    @media only screen and (max-width: 61.1875em) {
        width: 3.0625rem;
        line-height: 0;

        div {
            width: 0.4375rem;
            height: 0.4375rem;
        }
    }
    @media only screen and (min-width: 61.25em) {
        &:hover {
            .fill {
                border: 0.5rem solid black;
                box-sizing: border-box;
                border-left-color: transparent;
            }
        }
    }

`

const Logo = ({ background = "#fff" }) => {
    const style = { background }
    return (
        <Grid className="logo-grid">
            <div className="empty" style={style} />
            <div className="fill" style={style} />
            <div className="fill" style={style} />
            <div className="empty" style={style} />
            <div className="fill" style={style} />
            <div className="fill" style={style} />
            <div className="empty" style={style} />

            <div className="fill" style={style} />
            <div className="empty" style={style} />
            <div className="empty" style={style} />
            <div className="empty" style={style} />
            <div className="fill" style={style} />
            <div className="empty" style={style} />
            <div className="fill" style={style} />

            <div className="empty" style={style} />
            <div className="empty" style={style} />
            <div className="fill" style={style} />
            <div className="empty" style={style} />
            <div className="fill" style={style} />
            <div className="empty" style={style} />
            <div className="fill" style={style} />

            <div className="fill" style={style} />
            <div className="fill" style={style} />
            <div className="empty" style={style} />
            <div className="empty" style={style} />
            <div className="fill" style={style} />
            <div className="fill" style={style} />
            <div className="empty" style={style} />
        </Grid>
    )
}

export default Logo

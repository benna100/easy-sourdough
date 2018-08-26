import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

import {css} from 'emotion';

const nav = css`
    padding: 12px;
    width: calc(100% - 24px);
    background-color: black;

    a {
        color: white;
    }
`;

const ulStyle = css`
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
    list-style: none;
`;

const liStyle = css`
    &:not(:last-child) {
        margin-right: 12px;
    }
`;

const homeStyle = css`
    float: left;
`;


const Nav = () => {
    return (
        <nav className={nav}>
            <Link className={homeStyle} to="/">Home</Link>
            <ul className={ulStyle}>
                {/* <li className={liStyle}>
                    <Link to="/baguette">Baguette</Link>
                </li> */}
                <li className={liStyle}>
                    <Link to="/sourdough">Sourdough</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
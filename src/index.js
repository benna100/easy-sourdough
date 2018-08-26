import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Sourdough from './components/sourdough/Sourdough';
import Baguette from './components/baguettes/Baguette';
import Nav from './components/Nav';
import 'normalize.css';
import 'reset-css';
import {css} from 'emotion';

const templateStyle = css`
    background-color: #3d3e3f;
    color: #4d4d4d;
    font-family: sans-serif;
    min-height: 140vh;

    div {
        box-sizing: border-box;
    }
`;


ReactDOM.render(
    <Router>
        <div className={templateStyle}>
            <Nav/>
            <Route exact path="/" component={Home} />
            <Route path="/baguette" component={Baguette} />
            <Route path="/sourdough" component={Sourdough} />
        </div>
    </Router>
    , document.getElementById('root')
);

import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { css } from "emotion";

const homeStyle = css`
    text-align: center;
    color: white;

    h1 {
        margin: 24px 0 24px;
        font-size: 2rem;
    }

    h2 {
        margin-bottom: 24px;
    }

    li {
        display: inline-block;
        cursor: pointer;
        display: flex;
        justify-content: center;

        a {
            border-radius: 24px;
            background-color: white;
            color: black;
            padding: 24px;
            text-decoration: none;
        }
    }
`;

const Home = () => {
    return (
        <div className={homeStyle}>
            <h1>
                Bake the best bread in the world!    
            </h1>
            <h2>
                Select your what kind of bread you want to bake:
            </h2>
            <ul>
                {/* <li>
                    <Link to="/baguette">Baguette</Link>
                </li> */}
                <li>
                    <Link to="/sourdough">Sourdough</Link> 
                </li>
            </ul>
        </div>
    );
};

export default Home;

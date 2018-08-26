import React, { Component } from 'react';
import './BreadForm';
import BreadForm from "./BreadForm";
import Ingredients from "./Ingredients";
import Schedule from "./Schedule";
import sourdough from './sourdough.jpg';
import Header from '../Header';

import { css } from 'emotion';


const wrapperStyle = css`
    border-right: 1px solid #ccc;
    padding-right: 12px;
    padding-top: 24px;
    padding-left: 12px;
    width: 100%;

    @media only screen and (min-width: 600px) {
        flex: 0 0 calc(30%);
    }
`;

const mainStyle = css`
    max-width: 1024px;
    margin: -25vh auto;
    width: calc(100% - 24px);
    background-color: white;
    z-index: 1;
    position: relative;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    
    h1 {
        text-align: center;
        flex: 0 0 100%;
        border-bottom: 1px solid #ccc;
        padding: 36px 0 36px;
        font-size: 2rem;
        font-weight: bold;
    }

    h3 {
        font-weight: bold;
    }
`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputData: {
                breadCount: 1,
            },
        }
    }

    onFormUpdated = (data) => {
        this.setState({
            inputData: data,
        });
    }

    render() {
        return (
            <div>
                <Header image={sourdough} altTag="Sourdough bread"/>
                <main className={mainStyle}>
                    <h1>
                        Bake the perfect sourdough bread
                    </h1>
                    <div className={wrapperStyle}>
                        <BreadForm defaultState="" onFormUpdated={this.onFormUpdated} initialState={this.state.inputData}/>
                        <Ingredients formData={this.state.inputData}  />
                    </div>
                    <Schedule/>
                </main>
            </div>
        );
    }
}

export default App;

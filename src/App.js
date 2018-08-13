import React, { Component } from 'react';
import './App.css';
import './BreadForm';
import BreadForm from "./BreadForm";
import Ingredients from "./Ingredients";
import Schedule from "./Schedule";
import sourdough from './sourdough.jpg';


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
            <div className="app">
                <header>
                    <img src={sourdough} alt="Sourdough bread"/>
                </header>
                <main>
                    <h1>
                        Bake the perfect sourdough bread
                    </h1>
                    <div className="wrapper">
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

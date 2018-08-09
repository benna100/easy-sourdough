import React, { Component } from 'react';
import './App.css';
import './BreadForm';
import BreadForm from "./BreadForm";
import Ingredients from "./Ingredients";
import Schedule from "./Schedule";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                breadCount: 1,

            },
        }
    }

    onFormUpdated(data) {
        this.setState({
            formData: data,
        });
    }



    render() {
        return (
            <div className="app">
                <h1>
                    Bake the perfect sourdough bread
                </h1>
                <h2>
                    Lets begin with the basics
                </h2>
                <BreadForm onFormUpdated={this.onFormUpdated.bind(this)}/>
                <Ingredients formData={this.state.formData}  />
                <Schedule/>
            </div>
        );
    }
}

export default App;

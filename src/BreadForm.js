import React, { Component } from 'react';

class BreadForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breadCount: undefined,
            texture: undefined,
        };
    }
    formSubmitted(event) {
        this.props.onFormUpdated({
            breadCount: this.state.breadCount,
            texture: this.state.texture,
        });

        event.preventDefault();
    }

    handleBreadCountInput(e) {
        this.setState({breadCount: e.target.value});
    }

    handleTextureChange(e) {
        this.setState({texture: e.target.value});
    }
    render() {
        return (
            <form onSubmit={this.formSubmitted.bind(this)}>
                <p>I want to bake <input type="number" placeholder="Number of breads" onInput={this.handleBreadCountInput.bind(this)}/> breads </p>
                <p>
                    The texture should be
                    <select onChange={this.handleTextureChange.bind(this)}>
                        <option value="" disabled>Select the texture</option>
                        <option value="Airy">Airy</option>
                        <option value="Dense">Dense</option>
                    </select>
                </p>
                <p>
                    And the taste should be

                    <select>
                        <option value="Sour">Sour</option>
                        <option value="Not sour">Not sour</option>
                    </select>
                </p>

                <button>Lets get started</button>
            </form>
        );
    }
}

export default BreadForm;

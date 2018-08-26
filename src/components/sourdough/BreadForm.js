import React, { Component } from 'react';
import { css } from 'emotion';

const className = css`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 4px 8px;
  -webkit-appearance: none;
  margin: 0;
  width: 40px;
`;

const loafChooserStyle = css`
    line-height: 1.5rem;
`;

const headerH2Style = css`
    color: #a2a2a2;
    margin-bottom: 24px;
    font-size: 0.9rem;
`;

class BreadForm extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.initialState;
    }

    handleBreadCountInput = (e) => {
        const inputValue = e.target.value;

        if (inputValue >= 0) {
            this.setState({breadCount: e.target.value});

            this.props.onFormUpdated({
                breadCount: e.target.value,
            });
        }
    }

    render() {
        const loafesOfBread = this.state.breadCount > 1 ? 'loafes' : 'loaf';
        return (
            <div className={loafChooserStyle}>
                <h2 className={headerH2Style}>Ingredients</h2>
                For <input type="number" value={this.state.breadCount} className={className} onChange={this.handleBreadCountInput}/> {loafesOfBread} of bread you will need
            </div>
        );
    }
}

export default BreadForm;

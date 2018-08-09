import React, {Component} from 'react';

class ScheduleElement extends Component {
    render() {
        return (
            <li>
                <div className="wrapper">
                    <p className="time"></p>
                    <h3 className="title">
                        {this.props.title}
                    </h3>
                    <p className="description">
                        {this.props.description}
                    </p>
                </div>
            </li>
        );
    }
}

export default ScheduleElement;

import React, {Component} from 'react';

class ScheduleElement extends Component {
    render() {
        const optionalClass = this.props.optional ? 'optional': '';
        console.log(this.props);
        return (
            <li className={optionalClass}>
                <p className="time">
                    {this.props.time}
                </p>
                <div className="wrapper">
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

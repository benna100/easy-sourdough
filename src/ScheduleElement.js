import React, {Component} from 'react';
import Linkify from 'react-linkify';

class ScheduleElement extends Component {
    render() {
        const optionalClass = this.props.optional ? 'optional': '';
        const optionalTag = this.props.optional ? <p className="optional">Optional</p> :  '';
        return (
            <li className={optionalClass}>
                <h3 className="title">
                    {this.props.time} {this.props.title}
                </h3>
                {optionalTag}
                <Linkify properties={{target: '_blank'}}>
                    <p className="description">
                        {this.props.description}
                    </p>
                </Linkify>
            </li>
        );
    }
}

export default ScheduleElement;

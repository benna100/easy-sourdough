import React, {Component} from 'react';
import ScheduleElement from './ScheduleElement';

class Schedule extends Component{
    render() {
        const scheduleElements = [
            {
                title: 'Feed starter',
                description: 'Add in the water into the starter',
            }, {
                title: 'Mix water and flour',
                description: 'Add in the ',
            }, {
                title: 'Add starter',
                description: 'Add in the starter and the salt and mix it all together',
            }, {
                title: 'Do stuff',
                description: 'Add in the ',
            }
        ];

        return (
            <div className="schedule">
                <h2>This is your schedule:</h2>
                <ul>
                    {
                        scheduleElements.map((scheduleElement, i) => {
                            return <ScheduleElement title={scheduleElement.title} description={scheduleElement.description} key={i}/>;
                        })
                    }

                </ul>
            </div>
        );
    }
}

export default Schedule;

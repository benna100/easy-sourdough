import React, {Component} from 'react';
import ScheduleElement from './ScheduleElement';

class Schedule extends Component{
    render() {
        const scheduleElements = [
            {
                title: 'Feed your starter',
                description: 'Add in water and flour to the starter. To see how to make a sourdough starter go to: https://www.youtube.com/watch?v=I1Ssdzk6uhI',
                optional: false,
                time: '8:00'
            }, {
                title: 'Mix water and flour',
                description: 'Add in the flour and water. This process is called autolyse. It develops the gluten in the bread. ',
                optional: false,
                time: '17:00'
            }, {
                title: 'Add starter',
                description: 'When the starter has close to doubled in size and can pass the float test it is ready for use. Now mix the starter, the salt and the dough. The bulk fermentation stage has officially started.',
                optional: false,
                time: '17:30'
            }, {
                title: 'Stretch the dough',
                description: 'Fold over every part of the dough',
                optional: false,
                time: '17:15'
            }, {
                title: 'Stretch the dough',
                description: 'Fold over every part of the dough',
                optional: false,
                time: '17:30'
            }, {
                title: 'Stretch the dough',
                description: 'Fold over every part of the dough. Start to be gentle when folding.',
                optional: true,
                time: '18:00'
            }, {
                title: 'Stretch the dough',
                description: 'Gently fold over every part of the dough.',
                optional: true,
                time: '18:30'
            }, {
                title: 'Round the dough',
                description: 'At this point the dough should be between 1.5 - 2 times the original size. The dough now needs to be shaped into a ball, very gently!',
                optional: true,
                time: '22:00'
            }, {
                title: 'Shape the dough',
                description: 'Flip the dough over on some light flour and fold it in on itself. Flour container and put inside seam side up into a container. Now the bulk fermentation has ended. Put into fridge and let sit the night over.',
                optional: false,
                time: '22:30'
            }, {
                title: 'Warm the oven',
                description: 'Warm the oven up with a pot inside and take the dough out of the fridge.',
                optional: false,
                time: '08:00'
            }, {
                title: 'Flip the dough into the pot',
                description: 'Flip it in and score it with a razorblade or a sharp knife. Put into oven on max with lid over pot for 20 min.',
                optional: false,
                time: '08:30'
            }, {
                title: 'Take lid off of pot',
                description: 'Take the lid off and turn the heat down to 200 deg celcius, bake for 25 min further.',
                optional: false,
                time: '08:40'
            }, {
                title: 'Take the bread out of the oven',
                description: 'Take the bread out of the oven and let it sit for 1 hour',
                optional: false,
                time: '09:05'
            }, {
                title: 'Eat your delicious bread!',
                description: 'Thats it, you can now enjoy the fruits of your labor :D',
                optional: false,
                time: '10:05'
            }
        ];

        return (
            <div className="schedule">
                <h2>Schedule</h2>
                <ul>
                    {
                        scheduleElements.map((scheduleElement, i) => {
                            return <ScheduleElement
                                title={scheduleElement.title}
                                description={scheduleElement.description}
                                optional={scheduleElement.optional}
                                time={scheduleElement.time}
                                key={i}
                            />;
                        })
                    }

                </ul>
            </div>
        );
    }
}

export default Schedule;

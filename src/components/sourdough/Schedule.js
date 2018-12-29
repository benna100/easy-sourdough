import React, {Component} from 'react';
import ScheduleElement from './ScheduleElement';
import { css } from 'emotion';

const scheduleStyle = css`
    padding-left: 12px;
    padding-top: 24px;
    border-top: 1px solid #ccc;

    @media only screen and (min-width: 600px) {
        flex: 0 0 70%;
        padding-left: 24px;
        overflow-y: scroll;
        max-height: 500px;
    }

    ul {
        margin: 0 auto;
        position: relative;
        list-style: none;
        padding-left: 0;
        max-width: 700px;

        li {
            margin-bottom: 36px;
            position: relative;
            word-break: break-word;

            h3 {
                margin-bottom: 8px;

                display: inline-block;
            }

            .optional {
                border-radius: 8px;
                background-color: #4d4d4d;
                color: white;
                padding: 4px 8px;
                display: inline-block;
                margin-left: 24px;
            }

            .description {
                line-height: 1.5rem;
            }
        }
    }
`;

const headerH2Style = css`
    color: #a2a2a2;
    margin-bottom: 24px;
    font-size: 0.9rem;
`;

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
                description: 'Add in the flour and water. Mix it in a mixer or with hand for about 15 min. The dough just needs to be well incorporated. This process is called autolyse. It develops the gluten in the bread. ',
                optional: false,
                time: '17:00'
            }, {
                title: 'Add starter',
                description: 'When the starter has close to doubled in size and can pass the float test it is ready for use. Now mix the starter, the salt and the dough. Mix it with a mixer for 20-25 minutes. It need to be able to pass the gluten window pane test: https://www.youtube.com/watch?v=HvTM7ZyILas. The dough should be shiny and let go of the bowl. VERY IMPORTANT! The bulk fermentation stage has officially started. Scoop the dough up and slap it back into the bowl for 5 min (if no mixer). This develops the gluten strength.',
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
                description: 'At this point the dough should be between 1.5 - 2 times the original size. The dough now needs to be shaped into a ball, very gently! Should bench rest for 30 min.',
                optional: true,
                time: '22:00'
            }, {
                title: 'Shape the dough',
                description: 'Flip the dough over on some light flour and fold it in on itself. Shape the final bread. If the dough has more than two breads this is now you cut it out to individual breads and shape them. Flour container and put inside seam side up into a container. Now the bulk fermentation has ended. ',
                optional: false,
                time: '22:30'
            }, {
                title: 'Prepare for fridge',
                description: 'Basiscally the dough now needs to proof until its done. The longer you wait now the deeper nuances/more sour the bread will become. Because my fridge is so cold it does not proof the dough i need to have the dough perfectly for the oven when i put it into the fridge. Use the bread proofing finger test to decide: https://www.youtube.com/watch?v=vFakPswlQrY. I have had good experience with bread around this proofing: https://photos.app.goo.gl/MGXn9wPCb3ozwHmu6 Even though this maybe a bit to overproofed. ',
                optional: false,
                time: '22:30'
            }, {
                title: 'Warm the oven',
                description: 'Warm the oven up with a pot inside. DONT take the dough out right before baking it. ',
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
            <div className={scheduleStyle}>
                <h2 className={headerH2Style}>Schedule</h2>
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

import React from 'react';
import moment from 'moment-timezone';
import ClockList from './clock_list.js';
import ClockManager from './clock_manager.js';
import './world-clock.css'

class WorldClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zonesList: moment.tz.names().filter(function(zone) {
                return zone !== 'Europe/Kiev';
            }),
            clocksList: ['Europe/Kiev']
        };

        this.addNewClock = this.addNewClock.bind(this);
    }

    addNewClock(timezone) {
        this.setState(function(prevState) {
            const newClocksList = prevState.clocksList.concat(timezone);
            const newZonesList = prevState.zonesList.filter(function(zone) {
                return zone !== timezone;
            });
            return {
                clocksList: newClocksList,
                zonesList: newZonesList
            };
        });
    }

    render() {
        return (
            <div className='world-clock'>
                <ClockList clocks={this.state.clocksList}/>
                <ClockManager
                    zones={this.state.zonesList}
                    onAddClockSubmit={this.addNewClock}
                />
            </div>
        );
    }
}

export default WorldClock;
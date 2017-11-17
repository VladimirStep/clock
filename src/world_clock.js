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
        }
    }

    render() {
        return (
            <div className='world-clock'>
                <ClockList clocks={this.state.clocksList}/>
                <ClockManager zones={this.state.zonesList}/>
            </div>
        );
    }
}

export default WorldClock;
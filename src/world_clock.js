import React from 'react';
import ClockList from './clock_list.js';
import ClockManager from './clock_manager.js';
import './world-clock.css'

class WorldClock extends React.Component {
    render() {
        return (
            <div className='world-clock'>
                <ClockList />
                <ClockManager />
            </div>
        );
    }
}

export default WorldClock;
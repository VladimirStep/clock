import React from 'react';
import ClockListContainer from './clock_list.js';
import ClockManagerContainer from './clock_manager.js';
import './world-clock.css'

function WorldClock() {
    return (
        <div className='world-clock'>
            <ClockListContainer />
            <ClockManagerContainer />
        </div>
    );
}

export default WorldClock;
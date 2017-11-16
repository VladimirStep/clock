import React from 'react';
import ClockList from './clock_list.js';
import ClockManager from './clock_manager.js';

class Clock extends React.Component {
    render() {
        return (
            <div className='clock'>
                <ClockList />
                <ClockManager />
            </div>
        );
    }
}

export default Clock;
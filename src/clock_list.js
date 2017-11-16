import React from 'react';
import ClockItem from './clock_item.js'

class ClockList extends React.Component {
    render() {
        return (
            <div className='clock-list'>
                <h1>World Clock</h1>
                <ClockItem />
            </div>
        );
    }
}

export default ClockList;
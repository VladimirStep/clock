import React from 'react';
import ClockItem from './clock_item.js'
import './clock-list.css'

class ClockList extends React.Component {
    render() {
        return (
            <div className='clock-list'>
                <h1>World Clock</h1>
                <div className='list-wrapper'>
                    {this.props.clocks.map((zone, index) =>
                        <ClockItem key={index.toString()} timezone={zone} />
                    )}
                </div>
            </div>
        );
    }
}

export default ClockList;
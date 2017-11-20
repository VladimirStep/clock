import React from 'react';
import ClockItemContainer from './clock_item.js'
import './clock-list.css'
import { connect } from "react-redux";

class ClockList extends React.Component {
    render() {
        return (
            <div className='clock-list'>
                <h1>World Clock</h1>
                <div className='list-wrapper'>
                    {this.props.clocks.map((zone, index) =>
                        <ClockItemContainer key={index.toString()} timezone={zone} />
                    )}
                </div>
            </div>
        );
    }
}

function mapStateToClockListProps(state) {
    return {
        clocks: state.clocksList
    };
}

const ClockListContainer = connect(
    mapStateToClockListProps
)(ClockList);

export default ClockListContainer;
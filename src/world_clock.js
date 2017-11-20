import React from 'react';
import { connect } from 'react-redux';
import ClockList from './clock_list.js';
import ClockManager from './clock_manager.js';
import './world-clock.css'
import { addClock } from "./actions";

class WorldClock extends React.Component {
    mapStateToClockListProps(state) {
        return {
            clocks: state.clocksList
        };
    }

    mapStateToClockManagerProps(state) {
        return {
            zones: state.zonesList
        };
    }

    mapDispatchToClockManagerProps(dispatch) {
        return {
            onAddClockSubmit: timezone => dispatch(addClock(timezone))
        };
    }

    render() {
        const ClockListContainer = connect(
            this.mapStateToClockListProps
        )(ClockList);
        const ClockManagerContainer = connect(
            this.mapStateToClockManagerProps,
            this.mapDispatchToClockManagerProps
        )(ClockManager);

        return (
            <div className='world-clock'>
                <ClockListContainer />
                <ClockManagerContainer />
            </div>
        );
    }
}

export default WorldClock;
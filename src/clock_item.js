import React from 'react';
import Clock from 'react-clock';
import moment from 'moment-timezone';
import './clock-item.css'
import { connect } from "react-redux";
import { removeClock } from "./actions";

class ClockItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.calculateTime()
        };
        this.handleClick = this.handleClick.bind(this);
    }

    calculateTime() {
        return new Date(moment.tz(this.props.timezone).format("YYYY-MM-DD HH:mm:ss"));
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.setState({ date: this.calculateTime() }),
            400
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleClick() {
        this.props.onRemoveClock(this.props.timezone);
    }

    render() {
        return (
            <div className='clock-container'>
                <div className='close' onClick={this.handleClick}>
                    <span className='red'>&times;</span>
                </div>
                <Clock
                    size={200}
                    value={this.state.date}
                />
                <p>{this.props.timezone}</p>
            </div>
        );
    }
}

function mapDispatchToClockItemProps(dispatch) {
    return {
        onRemoveClock: timezone => dispatch(removeClock(timezone))
    };
}

const ClockItemContainer = connect(null, mapDispatchToClockItemProps)(ClockItem);

export default ClockItemContainer;
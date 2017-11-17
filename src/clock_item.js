import React from 'react';
import Clock from 'react-clock';
import moment from 'moment-timezone';
import './clock-item.css'

class ClockItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.calculateTime()
        };
    }

    calculateTime(timezone) {
        return new Date(moment.tz(this.props.timezone));
    }

    componentDidMount() {
        setInterval(
            () => this.setState({ date: this.calculateTime() }),
            1000
        );
    }

    render() {
        return (
            <div className='clock-container'>
                <Clock
                    size={200}
                    value={this.state.date}
                />
                <p>{this.props.timezone}</p>
            </div>
        );
    }
}

export default ClockItem;
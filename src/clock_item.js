import React from 'react';
import Clock from 'react-clock';

class ClockItem extends React.Component {
    state = {
        date: new Date(),
    };

    componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }

    render() {
        return (
            <div>
                <Clock
                    value={this.state.date}
                />
                <p>Local time</p>
            </div>
        );
    }
}

export default ClockItem;
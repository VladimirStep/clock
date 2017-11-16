import React from 'react';
import Clock from 'react-clock/build/entry.nostyle';
import './clock-item.css'

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
            <div className='clock-container'>
                <Clock
                    size={200}
                    value={this.state.date}
                />
                <p>Local time</p>
            </div>
        );
    }
}

export default ClockItem;
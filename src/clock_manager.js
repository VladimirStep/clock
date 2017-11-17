import React from 'react';
import './clock-manager.css';

class ClockManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.zones[0]};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.zones[0]});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddClockSubmit(this.state.value);
    }

    render() {
        return (
            <div className='clock-manager'>
                <h3>TimeZone selector</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='timezone-select'>
                        Select timezone:
                    </label>
                    <select
                        id='timezone-select'
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        {this.props.zones.map((zone, index) =>
                            <option key={index.toString()} value={zone}>
                                {zone}
                            </option>
                        )}
                    </select>
                    <input type="submit" value='Add Clock'/>
                </form>
            </div>
        );
    }
}

export default ClockManager;
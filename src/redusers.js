import moment from 'moment-timezone';
import { ADD_CLOCK } from "./actions";

const initialState = {
    zonesList: moment.tz.names().filter(function(zone) {
        return zone !== 'Europe/Kiev';
    }),
    clocksList: ['Europe/Kiev']
};

function clockApp(state = initialState, action) {
    switch (action.type) {
        case ADD_CLOCK:
            const newClocksList = state.clocksList.concat(action.timezone);
            const newZonesList = state.zonesList.filter(function(zone) {
                return zone !== action.timezone;
            });
            return Object.assign({}, state, {
                    clocksList: newClocksList,
                    zonesList: newZonesList
                }
            );
        default:
            return state;
    }
}

export default clockApp;
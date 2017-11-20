import moment from 'moment-timezone';
import { ADD_CLOCK } from "./actions";

const defaultZone = 'Europe/Kiev';

const initialState = {
    zonesList: moment.tz.names().filter(function(zone) {
        return zone !== defaultZone;
    }),
    clocksList: [defaultZone]
};

function clockApp(state = initialState, action) {
    switch (action.type) {
        case ADD_CLOCK:
            const clocksList = state.clocksList.concat(action.timezone);
            const zonesList = state.zonesList.filter(function(zone) {
                return zone !== action.timezone;
            });
            return Object.assign({}, state, {
                    clocksList,
                    zonesList
                }
            );
        default:
            return state;
    }
}

export default clockApp;
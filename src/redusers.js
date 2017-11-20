import moment from 'moment-timezone';
import {ADD_CLOCK, REMOVE_CLOCK} from "./actions";

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
            const clocksListAddedItem = state.clocksList.concat(action.timezone);
            const zonesListRemovedItem = state.zonesList.filter(function(zone) {
                return zone !== action.timezone;
            });
            return Object.assign({}, state, {
                    clocksList: clocksListAddedItem,
                    zonesList: zonesListRemovedItem
                }
            );
        case REMOVE_CLOCK:
            const zonesListAddedItem = state.zonesList.concat(action.timezone);
            const clocksListRemovedItem = state.clocksList.filter(function(zone) {
                return zone !== action.timezone;
            });
            return Object.assign({}, state, {
                    clocksList: clocksListRemovedItem,
                    zonesList: zonesListAddedItem
                }
            );
        default:
            return state;
    }
}

export default clockApp;
import moment from 'moment-timezone';
import {ADD_CLOCK, REMOVE_CLOCK} from "./actions";

const defaultZone = 'Europe/Kiev';

const zoneNames = moment.tz.names();

const initialState = {
    zonesList: remove(zoneNames, defaultZone),
    clocksList: [defaultZone]
};

function remove(array, ...elements) {
    let tmpArray = array.slice();

    for(let element of elements) {
        const index = tmpArray.indexOf(element);

        if (index > -1) {
            tmpArray.splice(index, 1);
        }
    }

    return tmpArray;
}

function clockApp(state = initialState, action) {
    switch (action.type) {
        case ADD_CLOCK:
            const clocksListAddedItem = state.clocksList.concat(action.timezone);
            const zonesListRemovedItem =  remove(state.zonesList, action.timezone);

            return Object.assign({}, state, {
                    clocksList: clocksListAddedItem,
                    zonesList: zonesListRemovedItem
                }
            );
        case REMOVE_CLOCK:
            const clocksListRemovedItem = remove(state.clocksList, action.timezone);
            const zonesListAddedItem = remove(zoneNames, ...clocksListRemovedItem);

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
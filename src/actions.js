export const ADD_CLOCK = 'ADD_CLOCK';
export const REMOVE_CLOCK = 'REMOVE_CLOCK';

export function addClock(timezone) {
    return { type: ADD_CLOCK, timezone };
}

export function removeClock(timezone) {
    return { type: REMOVE_CLOCK, timezone };
}
export const ADD_CLOCK = 'ADD_CLOCK';

export function addClock(timezone) {
    return { type: ADD_CLOCK, timezone };
}
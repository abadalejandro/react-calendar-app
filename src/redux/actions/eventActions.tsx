import { types } from "../types/types";
import { IEvent } from "../reducers/calendarReducer";

export const eventAddNew = (event:IEvent) => ({
    type: types.eventAddNew,
    payload: {event},
});

export const eventSetActiveEvent = (event:IEvent) => ({
    type: types.eventSetActive,
    payload: {event},
});

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent
});

export const eventUpdated = (event:IEvent) => ({
    type: types.eventUpdated,
    payload: {event}
});

export const eventDeleted = () => ({
    type: types.eventDeleted
});




import { Dispatch } from "redux";
import { types } from "../types/types";
import { IEvent } from "../reducers/calendarReducer";
import { fetchWithToken, httpMethod } from '../../helpers/fetch';
import { prepareEvents } from "../../helpers/prepareEvents";

export const eventStartAddNew = (event: any) => {
    return async (dispatch: Dispatch, getState: any) => {
        const { uid, name } = getState().auth;

        try {
            const resp = await fetchWithToken('events', event, httpMethod.POST);
            const body = await resp.json();

            if (body.ok) {
                event.id = body.event.id;
                event.user = {
                    _id: uid,
                    name: name,
                }
                dispatch(eventAddNew(event));
            }

        } catch (error) {
            console.log(error);
        }


    }

}



const eventAddNew = (event: IEvent) => ({
    type: types.eventAddNew,
    payload: { event },
});

export const eventSetActiveEvent = (event: IEvent) => ({
    type: types.eventSetActive,
    payload: { event },
});

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent
});

export const eventUpdated = (event: IEvent) => ({
    type: types.eventUpdated,
    payload: { event }
});

export const eventDeleted = () => ({
    type: types.eventDeleted
});

export const eventStartLoading = () => {
    return async (dispatch: Dispatch ) => {
        try {
            const resp = await fetchWithToken('events');
            const body = await resp.json();
            const events = prepareEvents(body.events);
            dispatch(eventLoaded(events));

        } catch (error) {
            console.log(error);
            
        }
    }
}

const eventLoaded = (events: IEvent[]) => ({
    type: types.eventLoaded,
    payload: events
});




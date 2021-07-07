import { types } from '../types/types';

export interface IUser {
    _id: string;
    name: string;
}
export interface IEvent {
    id?: number | null;
    title: string;
    start: any;
    end: any;
    bgcolor?: string;
    allDay?: boolean;
    notes?: string;
    user?: IUser;
}
export interface ICalendarReducer {
    events: IEvent[],
    activeEvent: null | IEvent;
}

// {
//     id: new Date().getTime(),
//     title: 'Birthdate of cheff',
//     start: moment().toDate(),
//     end: moment().add(1, 'hour').toDate(),
//     bgcolor: '#fafafa',
//     allDay: false,
//     notes: 'Correr',
//     user: {
//         _id: '123',
//         name: 'Alejandro'
//     }
// },

const initialState: ICalendarReducer = {
    events: [],
    activeEvent: null
};

interface IUIActions {
    type: string;
    payload?: { event:  any } 
}



export const calendarReducer = (state: ICalendarReducer = initialState, action: IUIActions) => {

    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload?.event,
            }
        case types.eventAddNew:
            return {
                ...state,
                events: [action.payload?.event, ...state.events]
            }

        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null,
            }

        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(event => event.id === action.payload?.event.id ? action.payload?.event : event)
            }

        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter(event => event.id !== state.activeEvent?.id),
                activeEvent: null,
            }


        case types.eventLoaded:
            return {
                ...state,
                events: action.payload
            }

        default:
            return state;
    }

}
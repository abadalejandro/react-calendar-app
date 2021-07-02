


interface ITypes {
    uiOpenModal: string;
    uiCloseModal: string;
    eventSetActive: string;
    eventAddNew: string;
    eventClearActiveEvent: string;
    eventUpdated: string;
    eventDeleted: string;
}


export const types: ITypes = {
    uiOpenModal: '[ui] Open Modal',
    uiCloseModal: '[ui] Close Modal',
    eventSetActive: '[event] Set Active Event',
    eventAddNew: '[event] Add New Event',
    eventClearActiveEvent: '[event] Clear Active Event',
    eventUpdated: '[event] Event updated',
    eventDeleted: '[event] Event deleted'
}

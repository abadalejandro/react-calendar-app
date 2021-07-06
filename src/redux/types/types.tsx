


interface ITypes {
    uiOpenModal: string;
    uiCloseModal: string;

    eventStartAddNew: string;
    eventSetActive: string;
    eventAddNew: string;
    eventClearActiveEvent: string;
    eventUpdated: string;
    eventDeleted: string;
    
    authCheckingFinish: string;
    authStartLogin: string;
    authLogin: string;
    authStartRegister: string;
    authStartRenewToken: string;
    authLogout: string;
}


export const types: ITypes = {
    uiOpenModal: '[ui] Open Modal',
    uiCloseModal: '[ui] Close Modal',

    eventStartAddNew: '[event] Start Add New Event',
    eventSetActive: '[event] Set Active Event',
    eventAddNew: '[event] Add New Event',
    eventClearActiveEvent: '[event] Clear Active Event',
    eventUpdated: '[event] Event updated',
    eventDeleted: '[event] Event deleted',

    authCheckingFinish: '[auth] Finish checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start Register',
    authStartRenewToken: '[auth] Start renew token',
    authLogout: '[auth] Logout',
}

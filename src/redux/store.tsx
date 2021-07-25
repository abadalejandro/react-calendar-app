
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { uiReducer, IUIReducer } from "./reducers/uiReducer";
import { calendarReducer, ICalendarReducer } from './reducers/calendarReducer';
import { authReducer, IAuthReducer } from './reducers/authReducer';


const middleware = [thunk];
const applied = composeWithDevTools(applyMiddleware(...middleware));
export interface IRootReducer {
    ui: IUIReducer;
    calendar: ICalendarReducer;
    auth: IAuthReducer;
}


export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    calendar: calendarReducer,
})


export const store = createStore(
    rootReducer,
    applied,

);

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { uiReducer, IUIReducer } from "./reducers/uiReducer";


// interface IRootReducer {
//     ui: IUIReducer
// }


export const rootReducer =  combineReducers({
    ui: uiReducer,
    // autheducer,
    // calendarReducer,
})


export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        composeWithDevTools()
    )

);
import { types } from "../types/types";

export interface IAuthReducer {
    checking?: boolean;
    uid: string | null;
    name: string | null;
}


const initialState = {
    checking: true,
    uid: null,
    name: null,
}

interface IUIActions {
    type: string;
    payload: {user:IAuthReducer}
}

export const authReducer = (state:IAuthReducer = initialState, action:IUIActions ) => {
    switch (action.type) {
       case types.authLogin:
        return {
            ...state,
            ...action.payload?.user,
            checking: false,
        }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false,
            }
        
        default:
            return state;
    }
}



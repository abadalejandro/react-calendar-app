import { types } from '../types/types';

interface IUIActions {
    type: string;
    payload?: {}
}

export interface IUIReducer {
    modalOpen: boolean;
}

const initialState: IUIReducer = {
    modalOpen: false,
}


export const uiReducer = (state: IUIReducer = initialState, action: IUIActions) => {

    switch (action.type) {
        case types.uiOpenModal:
            console.log('from reducer')
            return {
                ...state,
                modalOpen: true
            };

        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false,
            };

        default:
            return state;
    }
}
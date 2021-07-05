
export interface IAuthReducer {
    checking: boolean;
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
    payload?: {}
}

export const authReducer = (state:IAuthReducer = initialState, action:IUIActions ) => {
    switch (action.type) {
       
        
        default:
            return state;
    }
}
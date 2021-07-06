import { types } from "../types/types";
import { fetchWithoutToken, fetchWithToken, httpMethod } from '../../helpers/fetch';
import { IAuthReducer } from "../reducers/authReducer";
import Swal from "sweetalert2";


export const startChecking = () => {
    return async (dispatch: any) => {
        const resp = await fetchWithToken('auth/renewToken');
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            dispatch(login({
                uid: body.uid,
                name: body.name,
            }));
        } else {
            // Swal.fire('Error', body.msg, 'error');
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
});



export const startRegister = (email: string, password: string, name: string) => {
    return async (dispatch: any) => {
        const resp = await fetchWithoutToken('auth/newUser', { email, password, name }, httpMethod.POST);
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            dispatch(login({
                uid: body.uid,
                name: body.name,
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startLogin = (email: string, password: string) => {
    return async (dispatch: any) => {
        const resp = await fetchWithoutToken('auth/loginUser', { email, password }, httpMethod.POST);
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            dispatch(login({
                uid: body.uid,
                name: body.name,
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

const login = (user: IAuthReducer) => ({
    type: types.authLogin,
    payload: { user }
});


export const startLogout = () => {
    return (dispatch:any) => {
        localStorage.clear();
        dispatch(logout());
    }
}


const logout = () => ({type: types.authLogout});
import { types } from "../types/types";
import { fetchWithoutToken, httpMethod } from '../../helpers/fetch';
import { IAuthReducer } from "../reducers/authReducer";
import Swal from "sweetalert2";
import { IRegister } from '../../components/auth/LoginScreen';

export const startRegister = (email:string, password: string, name:string) => {
    return async (dispatch:any) => {
        const resp = await  fetchWithoutToken('auth/newUser', {email, password, name}, httpMethod.POST);
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            dispatch(login({
                uid: body.uid,
                name: body.name,
            }));
        }else{
            Swal.fire('Error', body.message, 'error');
        }
    }
}

export const startLogin = (email: string, password: string) => {
    return async (dispatch:any) => {
        const resp = await fetchWithoutToken('auth/loginUser', { email, password }, httpMethod.POST);
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            dispatch(login({
                uid: body.uid,
                name: body.name,
            }));
        }else{
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

const login = (user: IAuthReducer) => ({
    type: types.authLogin,
    payload: { user }
});
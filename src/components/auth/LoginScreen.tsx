import React from 'react';
import useForm from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../redux/actions/authActions';
import './login.css';
import Swal from 'sweetalert2';

export interface ILogin {
    loginEmail: string;
    loginPassword: string;
}

const initialLoginState: ILogin = {
    loginEmail: 'ale@gmail.com',
    loginPassword: '123456'

}

export interface IRegister {
    registerName: string;
    registerEmail: string;
    registerPassword: string;
    registerRepeatPassword: string;
}

const initialRegisterState: IRegister = {
    registerName: 'Nicola',
    registerEmail: 'nicola@gmail.com',
    registerPassword: '123456',
    registerRepeatPassword: '123456',
}


const LoginScreen = () => {
    const dispatch = useDispatch();
    const [loginForm, handleLoginInputChange] = useForm<ILogin>(initialLoginState);
    const [registerForm, handleRegisterInputChange] = useForm<IRegister>(initialRegisterState);

    const handleLogin = (e: any) => {
        e.preventDefault();
        dispatch(startLogin(loginForm.loginEmail, loginForm.loginPassword))
    }

    const handleRegister = (e: any) => {
        e.preventDefault();
       
        if(registerForm.registerPassword !== registerForm.registerRepeatPassword){
            return Swal.fire('Error', 'Passwords must be equals', 'error');
        }

        dispatch(startRegister(registerForm.registerEmail, registerForm.registerPassword, registerForm.registerName));
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin} >
                        <div className="form-group">
                            <input
                                type="text"
                                autoComplete="false"
                                className="form-control"
                                placeholder="Email"
                                name="loginEmail"
                                value={loginForm.loginEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                autoComplete="false"
                                className="form-control"
                                placeholder="Password"
                                name="loginPassword"
                                value={loginForm.loginPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                autoComplete="false"
                                className="form-control"
                                placeholder="Name"
                                onChange={handleRegisterInputChange}
                                value={registerForm.registerName}
                                name="registerName"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                autoComplete="false"
                                className="form-control"
                                placeholder="Email"
                                onChange={handleRegisterInputChange}
                                value={registerForm.registerEmail}
                                name="registerEmail"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                autoComplete="false"
                                className="form-control"
                                placeholder="Password"
                                onChange={handleRegisterInputChange}
                                value={registerForm.registerPassword}
                                name="registerPassword"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                autoComplete="false"
                                className="form-control"
                                placeholder="Repeat password"
                                onChange={handleRegisterInputChange}
                                value={registerForm.registerRepeatPassword}
                                name="registerRepeatPassword"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Create account" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen;
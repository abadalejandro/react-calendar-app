import React from 'react';
import useForm from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../redux/actions/authActions';
import './login.css';

interface ILogin {
    loginEmail: string;
    loginPassword: string;
}

const initialState: ILogin = {
    loginEmail: 'ale@gmail.com',
    loginPassword: '123456'

}


const LoginScreen = () => {
    const dispatch = useDispatch();
    const [loginForm, handleLoginInputChange] = useForm<ILogin>(initialState);
    
    const handleLogin = (e: any) => {
        e.preventDefault();
        dispatch(startLogin(loginForm.loginEmail, loginForm.loginPassword))
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
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="repeatPassword"
                                className="form-control"
                                placeholder="Repeat password"
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
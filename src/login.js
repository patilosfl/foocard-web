import { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from './UserContext';
import { API } from './util';

const Login = () => {

    let history = useHistory();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [userDetails, setUserDetails] = useContext(UserContext);

    const addUser = (name) => {

        setUserDetails(currentState => name);
    }

    const storeUserDetails = (details) => {
        sessionStorage.setItem('token', `Bearer ${details.token}`);
        sessionStorage.setItem('name', details.name);
        addUser(details.name);
    }

    const redirectPage = () => {
        history.push('/patients');
    }

    const submitUserDetails = async () => {
        try {
            console.log("test");
            const response = await API('user/authenticate', user, 'post');            
            const json = await response.json();
            storeUserDetails(json);
            redirectPage();

        } catch (error) {
            console.log("error", error);
        }

    }

    const setLogin = (key, value) => {
        setUser({
            ...user,
            [key]: value
        });
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="username" placeholder="name@example.com" value={user.username} onChange={e => setLogin('username', e.target.value)} />
                                    <label htmlFor="username">Email / Mobile</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="password" placeholder="Password" value={user.password} onChange={e => setLogin('password', e.target.value)} />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value-="" id="rememberPasswordCheck" />
                                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                        Remember password
                                    </label>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="button" onClick={submitUserDetails}>Sign in</button>
                                </div>
                                <hr className="my-4" />
                                <div className="d-grid mb-2">
                                    <button className="btn btn-google btn-login text-uppercase fw-bold" type="button">
                                        <i className="fab fa-google me-2"></i> Sign in with Google
                                    </button>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="button">
                                        <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [registration, setRegistration] = useState({
        patient: {
            firstname: "",
            lastname: "",
            password: "",
            email: "",
            mobile: ""
        },
        validations: {
            error: ""
        },
        status: false
    });  

    const registerPatient = async () => {        
        try {
            const response = await fetch("http://localhost:8080/api/registerPatient", {
                method: 'post',
                mode: 'cors',
                body: JSON.stringify(registration.patient),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            await response.json();
        } catch (error) {
            console.log("error", error);
        }

    }

    const validatePatient = () => {
        let errorDetails = [];
        for (const key in registration.patient) {
            if (registration.patient[key] === null || registration.patient[key] === "") {
                errorDetails.push(key);
            }
        }

        if (errorDetails.length) {
            displayError(errorDetails);
        } else {
            registerPatient();
            setRegistration({
                ...registration,
                validations: {
                    ...registration.validations,
                    error: "Registered successfully! Click on login"
                },
                status: true
            });
        }
    }

    const displayError = (errorDetails) => {
        setRegistration({
            ...registration,
            validations: {
                ...registration.validations,
                error: `Please fill the ${errorDetails} !`
            }
        });
    }

    const history = useHistory();
    
    const redirectToLogin = () => {       
        console.log("login page");
        history.push('/login');
    }

    const setFormValue = (key, value) => {
        setRegistration({
            ...registration,
            patient: {
                ...registration.patient,
                [key]: value
            }
        });
    }

    return (
        <div className="container">

            <div className="register">
                <h3>Regsiter here.. <hr /></h3>
                <form className="row g-3">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="firstName" className="col-form-label">First Name</label>
                            <input type="text" value={registration.patient.firstname} className="form-control" placeholder="Enter your first name" aria-label="First name" onChange={e => setFormValue('firstname', e.target.value)} />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="firstName" className="col-form-label">Last Name</label>
                            <input type="text" value={registration.patient.lastname} className="form-control" placeholder="Enter your last name" aria-label="Last name" onChange={e => setFormValue('lastname', e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="password" className="col-form-label">Password</label>
                            <input type="password" value={registration.patient.password} className="form-control" placeholder="Enter your password" aria-label="Password" onChange={e => setFormValue('password', e.target.value)} />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="mobile" className="col-form-label">Mobile</label>
                            <input type="text" value={registration.patient.mobile} className="form-control" placeholder="Enter your mobile" aria-label="Mobile" onChange={e => setFormValue('mobile', e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <label htmlFor="email" className="col-form-label">Email</label>
                            <input type="text" value={registration.patient.email} className="form-control" placeholder="Enter your email" aria-label="Email" onChange={e => setFormValue('email', e.target.value)} />
                        </div>
                    </div>

                    {registration.validations.error.length > 0 &&
                        <div className="col-md-12 col-sm-12">
                            <div className="alert alert-info" role="alert">
                                {registration.validations.error}
                            </div>
                        </div>
                    }

                    <div className="col-md-12 col-sm-12">
                        <button type="button" className="btn btn-primary" onClick={validatePatient}>Register</button> &nbsp;
                        <button type="button" className="btn btn-primary" disabled={!registration.status} onClick={redirectToLogin}>Login</button>                        
                    </div>
                </form>               
            </div>
        </div>
    )
}


export default Register;
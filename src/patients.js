import { API, isValidSession } from './util';
import Grid from './grid';
import { UserContext } from './UserContext';
import { useHistory } from 'react-router-dom';


import React, { useEffect, useState, useContext } from 'react';
const Patients = () => {
    const [patients, setPatients] = useState([]);
    const [userDetails, setUserDetails] = useContext(UserContext);
    let history = useHistory();

    const isAuth = () => {

        if (userDetails || isValidSession()) {
            return true
        }
        return false;

    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await API("api/getPatients");
                const json = await response.json();
                setPatients(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        
        if (!isAuth()) {
            history.push('/login');
            return;
        }

        
        fetchData();
    }, []);

    return (
        <>
            {patients &&
                <div className="container">
                    <h3>List of patients:   <hr /></h3>
                    {patients.length && <Grid patients={patients} />}
                </div>
            }
        </>
    )
}

export default Patients;
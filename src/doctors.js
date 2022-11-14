import React, { useState, useEffect } from 'react';
const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/getAllDoctors");
                const json = await response.json();
                setDoctors(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (

        <>
            <h3>List of Doctors <hr /> </h3>
            <div className="row">
                <div className="col">
                    User Id
                </div>
                <div className="col">
                    User Name
                </div>
                <div className="col">
                    Email
                </div>
                <div className="col">
                    Education
                </div>
                <div className="col">
                    Hospital
                </div>
            </div>

            {doctors.map((doctor) =>
                <div className="row" key={doctor.id}>
                    <div className="col">
                        {doctor.id}
                    </div>
                    <div className="col">
                        {doctor.username}
                    </div>
                    <div className="col">
                        {doctor.email}
                    </div>
                    <div className="col">
                        {doctor.education}
                    </div>
                    <div className="col">
                        {doctor.hospital_name}
                    </div>
                </div>
            )}

        </>

    )
}

export default Doctors;
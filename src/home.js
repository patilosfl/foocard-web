import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    let history = useHistory();

    const addBookig = (hospital, doctor) => {
        history.push('/booking');
    }

    return (
        <>

            <div className='container hospital-list'>
                <h1>List of Hospitals</h1>
                <div className="row head-row">
                    <div className='col-2'><span className='title'>Hospital Name</span></div>
                    <div className='col-1'><span className='title'>Doctor</span></div>
                    <div className='col-1'><span className='title'>Degree</span></div>
                    <div className='col-1'><span className='title'>Type</span></div>
                    <div className='col-2'><span className='title'>Address</span></div>
                    <div className='col-1'><span className='title'>Booking</span></div>
                    <div className='col-2'><span className='title'>Schedule</span></div>
                    <div className='col-1'><span className='title'>Distance</span></div>
                    <div className='col-1'><span className='title'>Ratings</span></div>
                </div>
                <div className="row info-row">
                    <div className='col-2'><span className='info'>Shri Hospital</span></div>
                    <div className='col-1'><span className='info'>DR. Sandip Patil</span></div>
                    <div className='col-1'><span className='info'>BHMS</span></div>
                    <div className='col-1'><span className='info'>Clinic</span></div>
                    <div className='col-2'><span className='info'>Cloudnine Hospitals, Link Road, Malad West</span></div>
                    <div className='col-1'><span className='info'><button onClick={ () => addBookig('1123', '113')}>Book Slot</button></span></div>
                    <div className='col-2'><span className='info'>Availabilty</span></div>
                    <div className='col-1'><span className='info'>13 KM</span></div>
                    <div className='col-1'><span className='info'>5/10</span></div>
                </div>
                <div className="row info-row">
                    <div className='col-2'><span className='info'>Shri Hospital</span></div>
                    <div className='col-1'><span className='info'>DR. Sandip Patil</span></div>
                    <div className='col-1'><span className='info'>BHMS</span></div>
                    <div className='col-1'><span className='info'>Clinic</span></div>
                    <div className='col-2'><span className='info'>Cloudnine Hospitals, Link Road, Malad West</span></div>
                    <div className='col-1'><span className='info'><button>Book Slot</button></span></div>
                    <div className='col-2'><span className='info'>Availabilty</span></div>
                    <div className='col-1'><span className='info'>13 KM</span></div>
                    <div className='col-1'><span className='info'>5/10</span></div>
                </div>
                <div className="row info-row">
                    <div className='col-2'><span className='info'>Shri Hospital</span></div>
                    <div className='col-1'><span className='info'>DR. Sandip Patil</span></div>
                    <div className='col-1'><span className='info'>BHMS</span></div>
                    <div className='col-1'><span className='info'>Clinic</span></div>
                    <div className='col-2'><span className='info'>Cloudnine Hospitals, Link Road, Malad West</span></div>
                    <div className='col-1'><span className='info'><button>Book Slot</button></span></div>
                    <div className='col-2'><span className='info'>Availabilty</span></div>
                    <div className='col-1'><span className='info'>13 KM</span></div>
                    <div className='col-1'><span className='info'>5/10</span></div>
                </div>
            </div>
        </>
    );
}


export default Home;
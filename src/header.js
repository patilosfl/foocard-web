import { Link, useHistory } from 'react-router-dom';
import React, { useState, useContext, useEffect } from "react";
import { getUserName, isValidSession } from './util';
import { UserContext } from './UserContext';

const Header = () => {

  let history = useHistory();

  const [userDetails, setUserDetails] = useContext(UserContext);

  const [menu, setMenu] = useState({ collapse: true });
  const toggleMenu = () => {
    setMenu({ ...menu, collapse: !menu.collapse });
  }

  const logOut = () => {
    sessionStorage.setItem('token', '');
    setUserDetails(currentState => "");
    history.push('/login');
  }

  useEffect(() => {
    console.log(userDetails);
    if (!userDetails) {
      if (getUserName() && isValidSession()) {
        setUserDetails(currentState => getUserName());
      }
    }
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="nav-brand" id="foocard-logo" to="/home">foocard</Link>
        <button className={`navbar-toggler ${menu.collapse ? "collapsed" : ""}`}
          type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded={!menu.collapse} aria-label="Toggle navigation"
          onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse menu-transit ${!menu.collapse ? "show" : ""}`} id="navbarNav" style={!menu.collapse ? { "height": "300px" } : { height: "0px" }}>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctors">Doctors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/patients">Patients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>

          {userDetails &&
            <div className="text-end">
              <span className="user-info">
                {userDetails}
              </span>
              <button className="btn btn-danger" type="button" onClick={logOut}>Logout</button>
            </div>
          }

          {!userDetails &&
            <div className="text-end">
              <button className="btn btn-info" type="button" onClick={logOut}>Sign In</button>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default Header;